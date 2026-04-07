<template>
  <div class="p-8">
    <a-row :gutter="[16, 16]">
      <a-col :span="24">
        <a-card>
          <Chart :data="ticketsStore.projectHours" />
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card title="工单列表">
          <a-table :columns="columns" :data-source="ticketsStore.tickets" row-key="id">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'action' && userStore.role === 'admin'">
                <a-button type="link" danger @click="() => ticketsStore.deleteTicket(record.id)">删除</a-button>
              </template>
              <template v-if="column.key === 'overtime'">
                <span>{{ record.overtime ? 'Yes' : 'No' }}</span>
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
