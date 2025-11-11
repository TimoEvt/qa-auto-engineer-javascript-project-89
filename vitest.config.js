// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Мокаем CSS пакета, чтобы Vitest не пытался его парсить
      '@hexlet/chatbot-v2/dist/init.css': '/src/__mocks__/init.css',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    deps: {
      inline: ['@hexlet/chatbot-v2'],
    },
  },
  css: {
    modules: false, // отключаем парсинг CSS-модулей
  },
})

