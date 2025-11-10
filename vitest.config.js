// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Подменяем CSS пакета на мок
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
    modules: false, // Vitest не будет парсить CSS
  },
})
