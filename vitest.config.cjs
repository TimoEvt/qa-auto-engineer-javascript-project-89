// vitest.config.cjs
const { defineConfig } = require('vitest/config')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
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
