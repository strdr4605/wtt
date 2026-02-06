import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { serwist } from '@serwist/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    serwist({
      swSrc: 'src/sw.ts',
      swDest: 'sw.js',
      globDirectory: 'dist',
      injectionPoint: 'self.__SW_MANIFEST',
      rollupFormat: 'iife',
    }),
  ],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'when2meet-alternatives': resolve(__dirname, 'articles/when2meet-alternatives/index.html'),
        'calendly-alternatives': resolve(__dirname, 'articles/calendly-alternatives/index.html'),
        'doodle-alternatives': resolve(__dirname, 'articles/doodle-alternatives/index.html'),
        'share-availability-without-calendar-links': resolve(__dirname, 'articles/share-availability-without-calendar-links/index.html'),
        'best-free-scheduling-tools': resolve(__dirname, 'articles/best-free-scheduling-tools/index.html'),
        'schedule-meetings-across-time-zones': resolve(__dirname, 'articles/schedule-meetings-across-time-zones/index.html'),
        'remote-workers-share-availability': resolve(__dirname, 'articles/remote-workers-share-availability/index.html'),
        'async-scheduling': resolve(__dirname, 'articles/async-scheduling/index.html'),
        'lettucemeet-vs-when2meet-vs-wtt': resolve(__dirname, 'articles/lettucemeet-vs-when2meet-vs-wtt/index.html'),
        'schedule-meeting-without-email-back-and-forth': resolve(__dirname, 'articles/schedule-meeting-without-email-back-and-forth/index.html'),
      },
    },
  },
})
