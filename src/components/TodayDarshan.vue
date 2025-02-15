<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useImageStore } from '@/stores/image'

const imageStore = useImageStore()
const dailyDarshan = ref<string[]>([])

onMounted(async () => {
  const darshanResult = await imageStore.getDailyDarshan()
  dailyDarshan.value = darshanResult.imageUrls.map((image: any) => {
    return image.url
  })
})
</script>
<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-mb-3">
    <h1 class="tw-text-3xl tw-font-bold tw-mx-4 tw-text-gray-800">Today's Darshan</h1>
  </div>
  <div class="background-wrapper">
    <div class="today-darshan">
      <div class="darshan-gallery">
        <v-row>
          <v-col
            v-for="(image, index) in dailyDarshan"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex justify-center"
          >
            <v-card class="darshan-card">
              <v-img :src="image" aspect-ratio="1" cover class="darshan-image">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.background-wrapper {
  background-color: #fafafa;
  margin: 0 auto;
  width: 90vw;
  margin-bottom: 70px;
}
.today-darshan {
  padding: 20px;

  .darshan-card {
    width: 100%;
    max-width: 300px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  .darshan-gallery {
    text-align: center;
    padding: 10px;
  }
}
</style>
