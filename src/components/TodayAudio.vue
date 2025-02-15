<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useAudioStore } from '@/stores/audio'
import { useImageStore } from '@/stores/image'

import AudioCard from '@/components/AudioCard.vue'

const audioStore = useAudioStore()
const imageStore = useImageStore()

const dailyDarshan = ref<string[]>([])
const audioData = ref({
  id: '',
  title: '',
  subTitle: '',
  url: ''
})

// Video
// const videoUrl = ref('')

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
      <div class="tw-flex tw-justify-center">
        <AudioCard :audio-data="audioData" class="tw-w-full" />
      </div>
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
