<script setup lang="ts">
interface AudioData {
  id: string
  title: string
  subTitle: string
  url: string
}
defineProps<{
  audioData: AudioData
}>()
const appLogo = ref(`${import.meta.env.VITE_DO_BASE_URL}/assets/app-logo-460x460.jpg`)
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
</script>
<template>
  <v-card
    class="tw-max-w-lg tw-rounded-xl tw-overflow-hidden tw-shadow-md tw-border tw-border-gray-100"
  >
    <v-card-title class="tw-text-xl tw-font-semibold tw-text-gray-800 tw-text-center tw-pt-6">
      {{ audioData.title }}
    </v-card-title>
    <v-card-subtitle class="tw-text-gray-600 tw-text-center tw-pb-4">
      {{ audioData.subTitle }}
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
          :src="audioData.url"
          @ended="isPlaying = false"
          class="tw-w-full tw-h-12"
        ></audio>
      </div>
    </v-card-actions>
  </v-card>
</template>
<style scoped lang="scss"></style>
