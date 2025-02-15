<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { Video } from '@/types'

import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()
const { showVideoDialog } = storeToRefs(dialogStore)

const props = defineProps<{
  videoData: Video
}>()

// Compute the YouTube embed URL from the video ID
const videoUrl = computed(() => {
  return `https://www.youtube.com/embed/${props.videoData.id}`
})
</script>

<template>
  <v-dialog v-model="showVideoDialog" opacity="0.7" scrim="black" width="auto">
    <v-card class="tw-p-0">
      <v-card-text class="tw-p-0">
        <iframe
          :src="videoUrl"
          width="640"
          height="360"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
