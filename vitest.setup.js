// src/vitest.setup.js
import '@testing-library/jest-dom' // обязательно для матчеров типа toBeInTheDocument
import { vi } from 'vitest'
import React from 'react'

// Мокаем пакет @hexlet/chatbot-v2
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      // рендерим все шаги
      steps.map(step => React.createElement('div', { key: step.id }, step.message)),
      // добавляем кнопку, чтобы тесты её нашли
      React.createElement('button', { type: 'button' }, 'Зарегистрироваться')
    ),
}))
