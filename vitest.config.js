import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@hexlet/chatbot-v2/dist/init.css': path.resolve(__dirname, 'src/__mocks__/styleMock.js'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/vitest.setup.js', // <-- твой setup-файл
  },
})
