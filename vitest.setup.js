// Подключаем jest-dom для расширенных матчеров типа toBeInTheDocument
import '@testing-library/jest-dom'

// Мокаем CSS, чтобы Vitest не ругался на импорты стилей
import { vi } from 'vitest'

vi.mock('@hexlet/chatbot-v2/dist/init.css', () => ({}))
