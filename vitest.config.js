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
    globals: true,            // чтобы тесты могли использовать глобальные функции (describe, test и т.д.)
    environment: 'jsdom',     // среда для тестирования React-компонентов
    setupFiles: './vitest.setup.js', // твои настройки перед тестами
    deps: {
      inline: ['@hexlet/chatbot-v2'], // inline-парсинг зависимости, чтобы игнорировать CSS
    },
  },
  css: {
    modules: false, // отключаем парсинг CSS-модулей
  },
})
