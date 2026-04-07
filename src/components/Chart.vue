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
    },
    tooltip: {},
    xAxis: {
      data: props.data.map((item) => item.name),
    },
    yAxis: {},
    series: [
      {
        name: '工时',
        type: 'bar',
        data: props.data.map((item) => item.value),
      },
    ],
  };
  chart.setOption(option);
};
</script>
