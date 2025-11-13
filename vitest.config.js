// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Мокаем CSS пакета, чтобы Vitest не пытался его парсить
      '@hexlet/chatbot-v2/dist/init.css': path.resolve(__dirname, 'src/__mocks__/init.css'),
    },
  },
  test: {
    globals: true,                  // использовать describe, test, expect без импорта
    environment: 'jsdom',           // для работы с DOM
    setupFiles: path.resolve(__dirname, 'src/vitest.setup.js'), // setup-файл
    deps: {
      inline: ['@hexlet/chatbot-v2'], // inline-парсинг зависимости
    },
    watch: false                     // выключаем авто-тесты
  },
  css: {
    modules: false,                  // отключаем парсинг CSS-модулей
  },
})
