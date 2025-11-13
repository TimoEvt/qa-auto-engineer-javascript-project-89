import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'
import React from 'react'

// глобальные jest-dom matchers
Object.assign(expect, matchers)

// мок пакета, включая CSS
vi.mock('@hexlet/chatbot-v2', () => {
  return {
    default: ({ steps }) =>
      React.createElement(
        'div',
        null,
        steps.map(step => React.createElement('div', { key: step.id }, step.message)),
        React.createElement('button', { type: 'button' }, 'Зарегистрироваться')
      ),
    init: () => {}, // если есть named export
  }
})
