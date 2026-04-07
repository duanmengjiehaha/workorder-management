<template>
  <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps<{ data: { name: string; value: number }[] }>();

const chartRef = ref<HTMLElement>();

let chart: echarts.ECharts;

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value);
    renderChart();
  }
});

watch(() => props.data, () => {
  renderChart();
});

const renderChart = () => {
  const option = {
    title: {
      text: 'Project Hours Distribution',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: props.data.map((item) => item.name),
      axisLabel: {
        interval: 0,
        rotate: 30,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '工时',
        type: 'bar',
        data: props.data.map((item, index) => ({
          value: item.value,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: `rgba(58, 123, 255, ${1 - index * 0.1})` },
              { offset: 1, color: `rgba(106, 172, 255, ${1 - index * 0.1})` },
            ]),
          },
        })),
      },
    ],
  };
  chart.setOption(option);
};
</script>
