<script setup lang="ts">
import { ref } from 'vue'

import { Audio } from '@/types'

import { useAudioStore } from '@/stores/audio'
import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()
const audioStore = useAudioStore()

const audios = ref<Audio[]>([])
const audioPage = ref(1)
const audioTotal = ref(0)
const appLogo = `${import.meta.env.VITE_DO_BASE_URL}/assets/app-logo-460x460.jpg`
const loadingMore = ref(false)
const audioLoading = ref(true)
const selectedAudio = ref<Audio>({
  _id: '',
  title: '',
  subTitle: '',
  url: ''
})
const showAudioDialog = (audio: Audio) => {
  dialogStore.showAudio()
  selectedAudio.value = audio
}
const getAudios = async (page: number) => {
  if (page > 1) {
    loadingMore.value = true
  }

  try {
    const audioResult = await audioStore.getAllAudio(page)
    if (page === 1) {
      audios.value = audioResult.docs
    } else {
      audios.value = [...audios.value, ...audioResult.docs]
    }
    audioTotal.value = audioResult.total
    audioPage.value = page
  } catch (error) {
    console.error('Error loading audios:', error)
  } finally {
    audioLoading.value = false
    loadingMore.value = false
  }
}
const handleLoadMore = async ({ done }: any) => {
  if (loadingMore.value || audios.value.length >= audioTotal.value) {
    return
  }

  await getAudios(audioPage.value + 1)
  done('ok')
}

onMounted(async () => {
  await getAudios(1)
})

defineExpose({
  selectedAudio
})
</script>
<template>
  <div class="tw-mt-4">
    <div v-if="audioLoading" class="tw-flex tw-justify-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <div v-else class="tw-max-w-5xl tw-mx-auto tw-px-4">
      <div class="tw-space-y-3">
        <v-infinite-scroll :height="800" mode="manual" @load="handleLoadMore">
          <div
            v-for="audio in audios"
            :key="audio._id"
            class="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all tw-duration-200 tw-cursor-pointer tw-group"
            @click="showAudioDialog(audio)"
          >
            <div class="tw-relative tw-flex-shrink-0">
              <img
                :src="appLogo"
                class="tw-w-16 tw-h-16 tw-rounded-lg tw-object-cover tw-shadow-sm"
                alt="bapuji-img"
              />
              <div
                class="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity"
              >
                <div class="tw-bg-white/90 tw-rounded-full tw-p-2 tw-shadow-lg">
                  <v-icon icon="fas fa-play" class="tw-text-blue-600" size="small"></v-icon>
                </div>
              </div>
            </div>

            <div class="tw-ml-4 tw-flex-grow">
              <h3
                class="tw-text-base tw-font-medium tw-text-gray-900 group-hover:tw-text-blue-600 tw-transition-colors"
              >
                {{ audio.title }}
              </h3>
              <div class="tw-flex tw-items-center tw-mt-1 tw-text-sm tw-text-gray-500">
                <span class="tw-flex tw-items-center">
                  <v-icon
                    icon="fas fa-music"
                    class="tw-mr-1 tw-text-gray-500"
                    size="small"
                  ></v-icon>
                  {{ audio.subTitle }}
                </span>
              </div>
            </div>

            <div class="tw-flex-shrink-0 tw-ml-4">
              <v-icon
                icon="fas fa-chevron-right"
                class="tw-text-gray-400 group-hover:tw-text-blue-600 tw-transition-colors"
                size="small"
              ></v-icon>
            </div>
          </div>

          <template v-slot:loading>
            <div v-if="loadingMore" class="tw-flex tw-justify-center tw-py-4">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
          </template>
          <template v-slot:empty>
            <v-alert type="warning">No more audios!</v-alert>
          </template>
        </v-infinite-scroll>
      </div>
    </div>
  </div>
</template>
