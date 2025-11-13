import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { vi } from 'vitest'
import React from 'react'

// подключаем jest-dom матчеры
expect.extend(matchers)

// мокаем пакет @hexlet/chatbot-v2
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      steps.map(step => React.createElement('div', { key: step.id }, step.message)),
      React.createElement('button', { type: 'button', 'aria-label': 'Зарегистрироваться' }, 'Зарегистрироваться')
    ),
}))
