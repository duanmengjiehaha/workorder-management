<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <a-card title="登录" class="w-96">
      <a-form :model="formState" @finish="onFinish">
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const formState = reactive({
  username: '',
  password: '',
});

const router = useRouter();
const userStore = useUserStore();

const onFinish = (values: any) => {
  userStore.login(values.username);
  router.push('/');
};
</script>
