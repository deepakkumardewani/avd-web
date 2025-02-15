<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
// const logo = `${import.meta.env.VITE_DO_BASE_URL}/assets/krishna.png`
const navigateHome = () => {
  router.push('/')
}

// Navigation items for cleaner template
const navItems = [
  { title: 'About', to: '/about' },
  { title: 'Lectures', to: '/lectures' },
  { title: 'Books', to: '/books' },
  { title: 'Contact Us', to: '/contact' }
]
</script>

<template>
  <!-- Desktop Header -->
  <v-app-bar :elevation="2" absolute class="tw-bg-amber-50">
    <v-app-bar-title
      class="tw-cursor-pointer tw-font-serif tw-text-amber-900 tw-font-bold hover:tw-text-amber-800 tw-transition-colors tw-text-base md:tw-text-2xl tw-pr-2"
      style="white-space: normal; overflow: visible"
      @click="navigateHome"
    >
      <!-- <v-icon icon="fas fa-om" class="tw-mr-2 tw-text-amber-700" /> -->
      <!-- <img :src="logo" alt="krishna" class="tw-w-10 tw-h-10 tw-mr-2 tw-text-amber-700" /> -->
      Anand Vrindavan Dham
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="tw-hidden md:tw-flex tw-items-center tw-gap-2">
      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        variant="text"
        class="tw-text-amber-900 tw-font-medium tw-px-4 tw-py-2 hover:tw-bg-amber-100 tw-rounded-lg tw-transition-colors"
        :ripple="false"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-btn
      icon
      class="md:tw-hidden hover:tw-bg-amber-100 tw-transition-colors tw-ml-2"
      @click="drawer = !drawer"
    >
      <v-icon>fas fa-bars</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary class="tw-bg-amber-50">
    <v-list class="tw-pt-4">
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :title="item.title"
        class="tw-text-amber-900 tw-mb-2 hover:tw-bg-amber-100 tw-transition-colors tw-rounded-lg"
        @click="drawer = false"
      >
        <template #prepend>
          <v-icon
            :icon="
              item.title === 'About'
                ? 'fas fa-info-circle'
                : item.title === 'Lectures'
                  ? 'fas fa-microphone-alt'
                  : item.title === 'Books'
                    ? 'fas fa-book'
                    : 'fas fa-envelope'
            "
            class="tw-mr-2 tw-text-amber-700"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-btn::before {
  display: none;
}
</style>
