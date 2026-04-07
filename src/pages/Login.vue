<template>
  <div class="h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-sky-400 to-blue-600">
    <a-card class="w-96 shadow-2xl bg-white bg-opacity-75 backdrop-blur-lg rounded-lg">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">工单管理系统</h1>
      </div>
      <a-form :model="formState" @finish="onFinish">
        <a-form-item name="username">
          <a-input v-model:value="formState.username" placeholder="用户名" size="large">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="formState.password" placeholder="密码" size="large">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block size="large" :loading="loading">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import { notification } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

const formState = reactive({
  username: '',
  password: '',
});

const router = useRouter();
const userStore = useUserStore();
const loading = ref(false);

const onFinish = (values: any) => {
  loading.value = true;
  setTimeout(() => {
    userStore.login(values.username);
    notification.success({
      message: '登录成功',
      description: `欢迎您，${values.username}！`,
      duration: 2,
    });
    router.push('/');
    loading.value = false;
  }, 1000);
};
</script>
