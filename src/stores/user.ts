import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    role: '',
    username: '',
  }),
  actions: {
    login(username: string) {
      this.username = username;
      if (username === 'admin') {
        this.role = 'admin';
      } else {
        this.role = 'user';
      }
    },
    logout() {
      this.role = '';
      this.username = '';
    },
  },
});
