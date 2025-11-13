// vitest.setup.js
import '@testing-library/jest-dom' // расширяет expect автоматически
import { vi } from 'vitest'
import React from 'react'

// мок пакета @hexlet/chatbot-v2
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      steps.map(step => React.createElement('div', { key: step.id }, step.message != null ? String(step.message) : null)),
      React.createElement('button', { type: 'button', 'aria-label': 'Зарегистрироваться' }, 'Зарегистрироваться')
    ),
  init: () => {}, // если есть named export
}))

