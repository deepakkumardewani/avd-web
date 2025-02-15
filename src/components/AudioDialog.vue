<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { Audio } from '@/types'

import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()
const { showAudioDialog } = storeToRefs(dialogStore)

defineProps<{
  audioData: Audio
}>()
</script>
<template>
  <v-dialog v-model="showAudioDialog" max-width="600" opacity="0.7" scrim="black">
    <div class="tw-flex tw-justify-center">
      <AudioCard :audio-data="audioData" class="tw-w-full" />
    </div>
  </v-dialog>
</template>
