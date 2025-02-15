// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import About from '@/pages/About.vue'
import Books from '@/pages/Books.vue'
import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'
import Lectures from '@/pages/Lectures.vue'
import Privacy from '@/pages/Privacy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/lectures',
    name: 'lectures',
    component: Lectures
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
