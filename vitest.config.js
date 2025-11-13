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
    globals: true,                 // чтобы можно было использовать describe, test, expect без импорта
    environment: 'jsdom',          // для работы с DOM
    setupFiles: './src/vitest.setup.js', // путь к setup файлу для jest-dom
    deps: {
      inline: ['@hexlet/chatbot-v2'], // inline-парсинг зависимости
    },
    watch: false                   // можно включить true, если хочешь авто-тестирование при изменении файлов
  },
  css: {
    modules: false, // отключаем парсинг CSS-модулей
  },
})
