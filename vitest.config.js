// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // замокать CSS пакета на пустой модуль
      '@hexlet/chatbot-v2/dist/init.css': path.resolve(__dirname, 'src/__mocks__/styleMock.js'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['@hexlet/chatbot-v2'],
    },
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
})
