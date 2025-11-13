import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'
import React from 'react'

Object.assign(expect, matchers);

vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      steps.map(step => React.createElement('div', { key: step.id }, step.message)),
      React.createElement(
        'button',
        { type: 'button', 'aria-label': 'Зарегистрироваться' },
        'Зарегистрироваться'
      )
    ),
  init: () => {}, // если пакет экспортирует named function
}))
