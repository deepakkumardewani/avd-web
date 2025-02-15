import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const showAudioDialog = ref(false)
  const showVideoDialog = ref(false)

  function showAudio() {
    showAudioDialog.value = true
  }
  function hideAudio() {
    showAudioDialog.value = false
  }

  function showVideo() {
    showVideoDialog.value = true
  }
  function hideVideo() {
    showVideoDialog.value = false
  }

  return {
    showAudioDialog,
    showVideoDialog,
    showAudio,
    hideAudio,
    showVideo,
    hideVideo
  }
})
