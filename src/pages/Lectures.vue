<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AudioDialog from '@/components/AudioDialog.vue'
import AudioList from '@/components/AudioList.vue'
import VideoDialog from '@/components/VideoDialog.vue'
import VideoList from '@/components/VideoList.vue'

const router = useRouter()
const route = useRoute()

const audiosRef = ref()
const videosRef = ref()

const selectedIndex = ref(0)

onMounted(async () => {
  if (route.path.includes('/audio')) {
    selectedIndex.value = 0
  } else if (route.path.includes('/video')) {
    router.replace('/lectures/video')
    selectedIndex.value = 1

    // if (route.params.id) {
    //   //   const data = { id: route.params.id }
    //   //   openDialog(data, 'video')
    // }
  }
})
</script>

<template>
  <div class="tw-w-full">
    <v-tabs
      v-model="selectedIndex"
      class="tw-border-b tw-border-gray-200 tw-mb-4"
      color="primary"
      align-tabs="center"
    >
      <v-tab value="0">
        <v-icon start icon="fas fa-headphones"></v-icon>
        Audio
      </v-tab>
      <v-tab value="1">
        <v-icon start icon="fas fa-video"></v-icon>
        Video
      </v-tab>
    </v-tabs>

    <!-- Audio Tab Content -->
    <v-window v-model="selectedIndex">
      <v-window-item value="0">
        <AudioList ref="audiosRef" />
      </v-window-item>

      <v-window-item value="1">
        <VideoList ref="videosRef" />
      </v-window-item>
    </v-window>

    <AudioDialog :audio-data="audiosRef?.selectedAudio" />
    <VideoDialog :video-data="videosRef?.selectedVideo" />
  </div>
</template>
