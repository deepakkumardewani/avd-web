import { defineStore } from 'pinia'

import { useFetch } from '@/composables/userFetch'

export const useAudioStore = defineStore('audio', () => {
  async function getDailyAudio() {
    const dailyAudioUrl = `${import.meta.env.VITE_API_BASEPATH}/lectures/audio/daily`

    const { error, data } = await useFetch(dailyAudioUrl, {
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

  async function getAllAudio(page: number) {
    const allAudioUrl = `${import.meta.env.VITE_API_BASEPATH}/lectures/audio?page=${page}`
    const { error, data } = await useFetch(allAudioUrl, {
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
    return data.value
  }
  return {
    getDailyAudio,
    getAllAudio
  }
})
