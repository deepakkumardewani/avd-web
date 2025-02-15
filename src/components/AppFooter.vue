<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

// const footerLinks = [
//   {
//     title: 'Quick Links',
//     links: [
//       { name: 'Home', path: '/' },
//       { name: 'About', path: '/about' },
//       { name: 'Contact', path: '/contact' }
//     ]
//   },
//   {
//     title: 'Resources',
//     links: [
//       { name: 'Privacy Policy', path: '/privacy' },
//       { name: 'Terms of Service', path: '/terms' }
//     ]
//   }
// ]

const socialLinks = [
  {
    icon: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/pages/Anand%20Vrindavan%20Dham,%20Ulhasnagar/229846140394586'
  },
  {
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/shri_madhusudan_bapuji?igsh=MWcwd201NjJmdG55aQ=='
  },
  { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@ShriMadhusudanBapuji' }
]
</script>

<template>
  <footer class="tw-bg-gray-900 tw-text-white">
    <div class="tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-8">
      <div
        class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-space-y-4 md:tw-space-y-0"
      >
        <!-- Copyright -->
        <p class="tw-text-gray-400 tw-text-sm">
          © {{ currentYear }} Anand Vrindavan Dham. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="tw-flex tw-space-x-6">
          <a
            v-for="social in socialLinks"
            :key="social.icon"
            :href="social.url"
            class="tw-text-gray-400 hover:tw-text-white tw-transition-colors tw-duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon :icon="social.icon" size="large" />
          </a>
        </div>

        <!-- Privacy Policy -->
        <router-link
          to="/privacy"
          class="tw-text-gray-400 hover:tw-text-white tw-text-sm tw-transition-colors tw-duration-300"
        >
          Privacy Policy
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
