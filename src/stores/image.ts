import { defineStore } from 'pinia'

import { useFetch } from '@/composables/userFetch'

export const useImageStore = defineStore('image', () => {
  async function getDailyDarshan() {
    const dailyDarshanUrl = `${import.meta.env.VITE_API_BASEPATH}/photos/dailyDarshan`

    const { error, data } = await useFetch(dailyDarshanUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      }
    }).json<any>()
    if (error.value) {
      console.error('error', error.value)
      return
    }
    if (data.value) {
      return data.value
    }
  }
  return {
    getDailyDarshan
  }
})
