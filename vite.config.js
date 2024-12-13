import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv,} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({mode, command}) => {
  const { VITE_BASE_URL } = loadEnv(mode, './')
  const base = command === 'build' && !VITE_BASE_URL ?
      '/abz-test-task/' :
      VITE_BASE_URL

  console.log({ base, mode, command })
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
