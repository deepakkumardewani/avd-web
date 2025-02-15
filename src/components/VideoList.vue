<script setup lang="ts">
import { Video } from '@/types'

import { useDialogStore } from '@/stores/dialog'
import { useVideoStore } from '@/stores/video'

const dialogStore = useDialogStore()
const videoStore = useVideoStore()

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const videos = ref<Video[]>([])
const videoLoading = ref(true)
const videoTotal = ref(0)
const videoPage = ref(1)
const token = ref('')
const selectedVideo = ref<Video>({
  id: '',
  title: '',
  thumbnail: '',
  viewCount: 0,
  publishedAt: ''
})

const showVideoDialog = (video: Video) => {
  dialogStore.showVideo()
  selectedVideo.value = video
}

const getVideos = async (page: number) => {
  if (page > 1) {
    videoLoading.value = true
  }
  const videoResult = await videoStore.getVideoList(token.value)
  videoLoading.value = false
  if (page === 1) {
    videos.value = videoResult.videos
  } else {
    videos.value = [...videos.value, ...videoResult.videos]
  }
  videoTotal.value = videoResult.totalResults
  videoPage.value = page
  token.value = videoResult.token
}
const handleLoadMore = async () => {
  if (videoLoading.value || videos.value.length >= videoTotal.value) {
    return
  }

  await getVideos(videoPage.value + 1)
}
onMounted(async () => {
  await getVideos(1)
})

defineExpose({
  selectedVideo
})
</script>
<template>
  <div class="tw-mt-4">
    <!-- Initial loading state -->
    <div v-if="videoLoading && videos.length === 0" class="tw-flex tw-justify-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <!-- Video grid - removed v-else so it stays visible during load more -->
    <div
      v-if="videos.length > 0"
      class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-6 tw-px-4"
    >
      <div
        v-for="video in videos"
        :key="video.id"
        class="tw-flex tw-flex-col tw-group tw-cursor-pointer tw-transition-transform hover:tw-scale-105"
        @click="showVideoDialog(video)"
      >
        <!-- Thumbnail Container -->
        <div class="tw-relative tw-aspect-video tw-rounded-lg tw-overflow-hidden tw-shadow-md">
          <img
            :src="video.thumbnail"
            class="tw-w-full tw-h-full tw-object-cover"
            alt="video thumbnail"
          />
          <!-- Play Button Overlay -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-black/30 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity"
          >
            <span class="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
              <div class="tw-bg-white/90 tw-rounded-full tw-p-4 tw-shadow-lg">
                <v-icon icon="fas fa-play" class="tw-text-blue-600"></v-icon>
              </div>
            </span>
          </div>
        </div>

        <!-- Video Info -->
        <div class="tw-mt-3 tw-flex tw-flex-col tw-gap-2">
          <h3
            class="tw-text-sm tw-font-medium tw-line-clamp-2 tw-text-gray-900 group-hover:tw-text-blue-600"
          >
            {{ video.title }}
          </h3>
          <div class="tw-flex tw-items-center tw-text-xs tw-text-gray-500">
            <span class="tw-flex tw-items-center">
              <v-icon icon="far fa-eye" class="tw-mr-1 tw-text-gray-500" size="small"></v-icon>
              {{ video.viewCount }} views
            </span>
            <span class="tw-mx-2">•</span>
            <span class="tw-flex tw-items-center">
              <v-icon icon="far fa-clock" class="tw-mr-1 tw-text-gray-500" size="small"></v-icon>
              {{ formatDate(video.publishedAt) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button Section -->
    <div v-if="videos.length < videoTotal" class="tw-flex tw-justify-center tw-mt-8 tw-mb-12">
      <v-btn
        color="primary"
        variant="outlined"
        :loading="videoLoading"
        @click="handleLoadMore"
        class="tw-px-8"
      >
        <v-icon icon="fas fa-plus" class="tw-mr-2"></v-icon>
        Load More
      </v-btn>
    </div>

    <!-- Spacing at the bottom when no more videos -->
    <div v-else-if="videos.length > 0" class="tw-mb-12"></div>
  </div>
</template>
