import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Все CSS подменяем на пустой модуль
      '\\.css$': path.resolve(__dirname, 'src/__mocks__/styleMock.js'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/vitest.setup.js'),
    deps: { inline: ['@hexlet/chatbot-v2'] },
    transformMode: { web: [/\.[jt]sx?$/] },
  },
})
