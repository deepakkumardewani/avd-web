import { defineStore } from 'pinia'

import { useFetch } from '@/composables/userFetch'

export const useVideoStore = defineStore('video', () => {
  const getVideoList = async (token: string) => {
    const videoListUrl = `${import.meta.env.VITE_API_BASEPATH}/lectures/video?token=${token}`
    const { error, data } = await useFetch(videoListUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify({
        token: token
      })
    }).json<any>()
    if (error.value) {
      console.error('error', error.value)
      return
    }
    return data.value
  }
  return {
    getVideoList
  }
})
