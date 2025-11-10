// vitest.setup.js
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Мокаем CSS, чтобы Vitest не ругался на импорты стилей
vi.mock('@hexlet/chatbot-v2/dist/init.css', () => ({}))
