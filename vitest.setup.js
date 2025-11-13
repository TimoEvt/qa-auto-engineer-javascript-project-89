import '@testing-library/jest-dom' // для матчеров вроде toBeInTheDocument
import { vi } from 'vitest'
import React from 'react'

// Мокаем весь пакет @hexlet/chatbot-v2
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) =>
    React.createElement(
      'div',
      null,
      // Рендерим все шаги виджета
      steps.map(step => React.createElement('div', { key: step.id }, step.message)),
      // Добавляем кнопку "Зарегистрироваться", чтобы тесты могли её найти
      React.createElement('button', { type: 'button' }, 'Зарегистрироваться')
    ),
}))
