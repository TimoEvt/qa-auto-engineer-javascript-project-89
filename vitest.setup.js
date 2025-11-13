// src/vitest.setup.js
import '@testing-library/jest-dom' // подключаем матчеры jest-dom
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
      // добавляем кнопку "Зарегистрироваться"
      React.createElement('button', { type: 'button' }, 'Зарегистрироваться')
    ),
}))
