import { vi } from 'vitest'
import React from 'react'

// Мокаем весь пакет @hexlet/chatbot-v2, чтобы игнорировать CSS и использовать простой рендер
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      steps.map(step => React.createElement('div', { key: step.id }, step.message))
    ),
}))

