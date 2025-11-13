// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['@hexlet/chatbot-v2'], // транспилируем пакет
    },
    transformMode: {
      web: [/\.[jt]sx?$/], // трансформируем только JS/TS файлы
    },
    css: false, // игнорируем CSS полностью
  },
})
