import { defineStore } from 'pinia'
import { apiGetPositions } from '@/api/auth'
export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  getters: {},
  actions: {
    async loadPositionsList() {
        const response = await apiGetPositions()
        console.log(response.data);
    }
  },
})
