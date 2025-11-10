const { defineConfig } = require('vitest/config')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
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
    modules: false,
  },
})
