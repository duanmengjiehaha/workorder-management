<template>
  <a-layout class="h-screen">
    <a-layout-header v-if="userStore.role" class="flex items-center justify-between bg-blue-500 shadow-md px-8">
      <div class="text-lg font-bold text-white">工单管理与图表展示页面</div>
      <div class="flex items-center text-white">
        <a-avatar class="mr-2 bg-blue-700">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <span class="mr-4">{{ userStore.username }}</span>
        <a-popconfirm
          title="确定要退出登录吗？"
          ok-text="确定"
          cancel-text="取消"
          @confirm="logout"
        >
          <a-button type="text" class="text-white hover:bg-blue-600">
            <template #icon><LogoutOutlined /></template>
            退出登录
          </a-button>
        </a-popconfirm>
      </div>
    </a-layout-header>
    <a-layout-content class="overflow-y-auto">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { useUserStore } from './stores/user';
import { useRouter } from 'vue-router';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/login');
};
</script>