<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useAudioStore } from '@/stores/audio'
import { useImageStore } from '@/stores/image'

const audioStore = useAudioStore()
const imageStore = useImageStore()
const appLogo = ref(`${import.meta.env.VITE_DO_BASE_URL}/assets/app-logo-460x460.jpg`)
const dailyDarshan = ref<string[]>([])
const audioData = ref({
  title: '',
  subTitle: '',
  url: ''
})
const audioRef = ref<HTMLAudioElement | null>(null)

// Video
// const videoUrl = ref('')

const isPlaying = ref(false)

onMounted(async () => {
  audioData.value = await audioStore.getDailyAudio()
  const darshanResult = await imageStore.getDailyDarshan()
  dailyDarshan.value = darshanResult.imageUrls.map((image: any) => {
    return image.url
  })
})
</script>

<template>
  <div class="tw-max-w-4xl tw-mx-auto tw-px-4 tw-mb-16">
    <div class="tw-mb-16">
      <div class="tw-text-center tw-mb-12">
        <div class="tw-flex tw-items-center tw-justify-center tw-mb-3">
          <h1 class="tw-text-3xl tw-font-bold tw-mx-4 tw-text-gray-800">Today's Audio</h1>
        </div>
      </div>

      <v-card
        class="tw-max-w-lg tw-mx-auto tw-rounded-xl tw-overflow-hidden tw-shadow-md tw-border tw-border-gray-100"
      >
        <v-card-title class="tw-text-xl tw-font-semibold tw-text-gray-800 tw-text-center tw-pt-6">
          {{ audioData?.title }}
        </v-card-title>
        <v-card-subtitle class="tw-text-gray-600 tw-text-center tw-pb-4">
          {{ audioData?.subTitle }}
        </v-card-subtitle>
        <v-img
          height="330"
          :src="appLogo"
          alt="Photo of Bapuji"
          class="tw-object-cover tw-transition-transform hover:tw-scale-105 tw-duration-300"
        />
        <v-card-actions class="tw-bg-gray-50 tw-p-6">
          <div class="tw-w-full">
            <audio
              controls
              ref="audioRef"
              :src="audioData?.url"
              @ended="isPlaying = false"
              class="tw-w-full tw-h-12"
            ></audio>
          </div>
        </v-card-actions>
      </v-card>
    </div>

    <!-- <div>
      <div class="tw-flex tw-items-center tw-mb-8">
        <div class="tw-h-1 tw-bg-primary tw-w-16 tw-rounded-full"></div>
        <h1 class="tw-text-3xl tw-font-bold tw-ml-4 tw-text-gray-800">Today's Video</h1>
      </div>

      <div class="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-6">
        <div class="tw-max-w-5xl tw-mx-auto">
          <div
            class="tw-relative tw-w-full tw-aspect-video tw-rounded-xl tw-overflow-hidden tw-shadow-md"
          >
            <iframe
              :src="videoUrl"
              allowfullscreen
              class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
