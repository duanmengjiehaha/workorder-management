import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    role: '',
  }),
  actions: {
    login(username: string) {
      if (username === 'admin') {
        this.role = 'admin';
      } else {
        this.role = 'user';
      }
    },
  },
});
