<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAudioStore } from '@/stores/audio'
import { useVideoStore } from '@/stores/video'

interface Audio {
  id: string
  title: string
  subTitle: string
}

interface Video {
  id: string
  title: string
  thumbnail: string
  viewCount: number
  publishedAt: string
}

const router = useRouter()
const route = useRoute()
const audioStore = useAudioStore()
const videoStore = useVideoStore()

const appLogo = `${import.meta.env.VITE_DO_BASE_URL}/assets/app-logo-460x460.jpg`
const audios = ref<Audio[]>([])
const videos = ref<Video[]>([])

const audioLoading = ref(true)
const videoLoading = ref(true)

// const videoIdArray = ref<string[]>([])
const videoTotal = ref(0)
const audioTotal = ref(0)

const audioPage = ref(1)
const videoPage = ref(1)
const token = ref('')
const selectedIndex = ref(0)

// Computed properties for pagination
const audioPageItems = computed(() => {
  const start = (audioPage.value - 1) * 30
  return audios.value.slice(start, start + 30)
})

const videoPageItems = computed(() => {
  const start = (videoPage.value - 1) * 30
  return videos.value.slice(start, start + 30)
})

const getPage = async (page: number, type: string) => {
  if (type === 'audio') {
    const audioResult = await audioStore.getAllAudio(page)
    audioLoading.value = false
    audios.value = audioResult.docs
    audioTotal.value = audioResult.total
    audioPage.value = page
  }
  if (type === 'video') {
    videoLoading.value = true
    await getVideos()
    videoPage.value = page
  }
}

const getVideos = async () => {
  const videoResult = await videoStore.getVideoList(token.value)
  videoLoading.value = false
  videos.value = videoResult.videos
  videoTotal.value = videoResult.totalResults
}

// const openDialog = (item: Audio | Video, type: 'audio' | 'video') => {
//   // Implement dialog opening logic here
// }

onMounted(async () => {
  await getPage(1, 'audio')
  await getPage(1, 'video')

  if (route.path.includes('/audio')) {
    selectedIndex.value = 0
  } else if (route.path.includes('/video')) {
    router.replace('/lectures/video')
    selectedIndex.value = 1

    if (route.params.id) {
      //   const data = { id: route.params.id }
      //   openDialog(data, 'video')
    }
  }
})
</script>

<template>
  <div class="tw-w-full">
    <div class="tw-border-b tw-border-gray-200">
      <div class="tw-flex" role="tablist">
        <button
          v-for="(tab, index) in ['Audio', 'Video']"
          :key="tab"
          :class="[
            'tw-px-4 tw-py-2 tw-text-sm tw-font-medium',
            selectedIndex === index
              ? 'tw-text-blue-600 tw-border-b-2 tw-border-blue-600'
              : 'tw-text-gray-500 hover:tw-text-gray-700'
          ]"
          @click="selectedIndex = index"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Audio Tab Content -->
    <div v-if="selectedIndex === 0" class="tw-mt-4">
      <div v-if="audioLoading" class="tw-flex tw-justify-center">
        <div
          class="tw-animate-spin tw-rounded-full tw-h-8 tw-w-8 tw-border-b-2 tw-border-blue-600"
        ></div>
      </div>

      <div v-else class="tw-max-w-5xl tw-mx-auto tw-px-4">
        <div class="tw-space-y-3">
          <div
            v-for="audio in audioPageItems"
            :key="audio.id"
            class="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all tw-duration-200 tw-cursor-pointer tw-group"
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
                  <svg
                    class="tw-w-5 tw-h-5 tw-text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
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
                  <svg
                    class="tw-w-4 tw-h-4 tw-mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                  {{ audio.subTitle }}
                </span>
              </div>
            </div>

            <div class="tw-flex-shrink-0 tw-ml-4">
              <svg
                class="tw-w-5 tw-h-5 tw-text-gray-400 group-hover:tw-text-blue-600 tw-transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="tw-mt-8 tw-flex tw-justify-center">
          <!-- Implement pagination UI here -->
        </div>
      </div>
    </div>

    <!-- Video Tab Content -->
    <div v-if="selectedIndex === 1" class="tw-mt-4">
      <div v-if="videoLoading" class="tw-flex tw-justify-center">
        <div
          class="tw-animate-spin tw-rounded-full tw-h-8 tw-w-8 tw-border-b-2 tw-border-blue-600"
        ></div>
      </div>

      <div
        v-else
        class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-6 tw-px-4"
      >
        <div
          v-for="video in videoPageItems"
          :key="video.id"
          class="tw-flex tw-flex-col tw-group tw-cursor-pointer tw-transition-transform hover:tw-scale-105"
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
                  <svg
                    class="tw-w-6 tw-h-6 tw-text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
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
                <svg
                  class="tw-w-4 tw-h-4 tw-mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {{ video.viewCount }} views
              </span>
              <span class="tw-mx-2">•</span>
              <span class="tw-flex tw-items-center">
                <svg
                  class="tw-w-4 tw-h-4 tw-mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ video.publishedAt }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="tw-mt-8 tw-flex tw-justify-center">
        <!-- Implement pagination UI here -->
      </div>
    </div>
  </div>
</template>
