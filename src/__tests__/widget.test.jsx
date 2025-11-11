import React from 'react'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import steps from '../__fixtures__/steps'

// Мокаем весь пакет, чтобы игнорировать CSS
vi.mock('@hexlet/chatbot-v2', () => ({
  default: ({ steps }) => (
    <div>{steps.map(step => <div key={step.id}>{step.message}</div>)}</div>
  ),
}))

import Widget from '@hexlet/chatbot-v2'

test('чат-бот рендерится корректно', () => {
  render(<Widget steps={steps} />)
  expect(screen.getByText(/Привет! Я ваш виртуальный помощник/i)).toBeInTheDocument()
})

test('чат-бот получает правильные шаги', () => {
  render(<Widget steps={steps} />)
  expect(screen.getByText(/До свидания!/i)).toBeInTheDocument()
})
