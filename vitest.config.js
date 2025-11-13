// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Подставляем пустой CSS-файл вместо настоящего
      '@hexlet/chatbot-v2/dist/init.css': path.resolve(__dirname, 'src/__mocks__/init.css'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/vitest.setup.js'),
    deps: {
      inline: ['@hexlet/chatbot-v2'], // заставляем Vitest транспилировать пакет
    },
    // отключаем парсинг CSS для тестов
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
  css: {
    modules: false,
  },
})
