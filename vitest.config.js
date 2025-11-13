// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Если нужно, можно замокать CSS импорт пустым модулем
      // '@hexlet/chatbot-v2/dist/init.css': path.resolve(__dirname, 'src/__mocks__/styleMock.js'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/vitest.setup.js'),
    deps: {
      inline: ['@hexlet/chatbot-v2'], // транспилируем пакет
    },
    transformMode: {
      web: [/\.[jt]sx?$/], // трансформируем только JS/TS файлы
    },
    css: false, // <-- добавляем это, чтобы Vitest игнорировал CSS
  },
})
