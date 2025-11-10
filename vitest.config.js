/// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Мокаем CSS из пакета
      '@hexlet/chatbot-v2/dist/init.css': '/src/__mocks__/init.css',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Игнорируем CSS при импорте из node_modules
    deps: {
      inline: ['@hexlet/chatbot-v2']
    },
  },
  css: {
    modules: false, // чтобы Vitest не пытался парсить CSS
  },
})

