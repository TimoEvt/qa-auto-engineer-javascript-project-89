import '@testing-library/jest-dom'
import { expect, vi } from 'vitest'
import React from 'react'

// Мокаем пакет @hexlet/chatbot-v2 полностью
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      steps.map(step =>
        React.createElement('div', { key: step.id }, step.message != null ? String(step.message) : null)
      ),
      React.createElement('button', { type: 'button', 'aria-label': 'Зарегистрироваться' }, 'Зарегистрироваться')
    ),
  init: () => {},
}))
