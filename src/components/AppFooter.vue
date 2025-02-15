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
    <div class="tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-12">
      <!-- Main Footer Content -->
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
        <!-- Company Info -->
        <!-- <div>
          <h3 class="tw-text-xl tw-font-bold tw-mb-4">Company Name</h3>
          <p class="tw-text-gray-400 tw-mb-4">
            Providing quality services and products since 2020.
          </p>
        </div> -->

        <!-- Footer Links -->
        <!-- <template v-for="section in footerLinks" :key="section.title">
          <div>
            <h3 class="tw-text-xl tw-font-bold tw-mb-4">{{ section.title }}</h3>
            <ul>
              <li v-for="link in section.links" :key="link.name" class="tw-mb-2">
                <router-link
                  :to="link.path"
                  class="tw-text-gray-400 hover:tw-text-white tw-transition-colors tw-duration-300"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </template> -->

        <!-- Social Links -->
        <div>
          <h3 class="tw-text-xl tw-font-bold tw-mb-4">Connect With Us</h3>
          <div class="tw-flex tw-space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.url"
              class="tw-text-gray-400 hover:tw-text-white tw-transition-colors tw-duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon :icon="social.icon" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="tw-border-t tw-border-gray-800 tw-mt-12 tw-pt-8">
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center">
          <p class="tw-text-gray-400 tw-text-sm">
            © {{ currentYear }} Anand Vrindavan Dham. All rights reserved.
          </p>
          <div class="tw-mt-4 md:tw-mt-0">
            <router-link
              to="/privacy"
              class="tw-text-gray-400 hover:tw-text-white tw-text-sm tw-mx-2 tw-transition-colors tw-duration-300"
            >
              Privacy Policy
            </router-link>
            <!-- <router-link
              to="/terms"
              class="tw-text-gray-400 hover:tw-text-white tw-text-sm tw-mx-2 tw-transition-colors tw-duration-300"
            >
              Terms of Service
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
