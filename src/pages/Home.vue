<template>
  <div class="p-8 bg-gray-50 min-h-full">
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :lg="12">
        <a-card class="shadow-lg rounded-lg">
          <Chart :data="ticketsStore.projectHours" />
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12">
        <a-card title="工单列表" class="shadow-lg rounded-lg">
          <a-table :columns="columns" :data-source="ticketsStore.tickets" row-key="id" :scroll="{ x: true }">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'action' && userStore.role === 'admin'">
                <a-popconfirm
                  title="确定要删除这条工单吗？"
                  ok-text="确定"
                  cancel-text="取消"
                  @confirm="() => ticketsStore.deleteTicket(record.id)"
                >
                  <a-button type="link" danger class="flex items-center">
                    <template #icon><DeleteOutlined /></template>
                    删除
                  </a-button>
                </a-popconfirm>
              </template>
              <template v-if="column.key === 'overtime'">
                <a-tag :color="record.overtime ? 'red' : 'green'" class="flex items-center">
                  <template #icon>
                    <ClockCircleOutlined v-if="record.overtime" />
                    <CheckCircleOutlined v-else />
                  </template>
                  {{ record.overtime ? '是' : '否' }}
                </a-tag>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTicketsStore } from '../stores/tickets';
import { useUserStore } from '../stores/user';
import Chart from '../components/Chart.vue';
import { ClockCircleOutlined, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';

const ticketsStore = useTicketsStore();
const userStore = useUserStore();

const baseColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '项目名称', dataIndex: 'project', key: 'project' },
  { title: '是否加班', dataIndex: 'overtime', key: 'overtime' },
  { title: '工时', dataIndex: 'hours', key: 'hours' },
  { title: '创建时间', dataIndex: 'created_at', key: 'created_at' },
];

const columns = computed(() => {
  if (userStore.role === 'admin') {
    return [
      ...baseColumns,
      { title: '操作', key: 'action' },
    ];
  }
  return baseColumns;
});
</script>
