import { MotionPlugin } from '@vueuse/motion'
import type { App } from 'vue'

import router from '../router'
import pinia from '../stores'
import vuetify from './vuetify'

export function registerPlugins(app: App) {
  app.use(MotionPlugin)
  app.use(vuetify).use(router).use(pinia)
}
