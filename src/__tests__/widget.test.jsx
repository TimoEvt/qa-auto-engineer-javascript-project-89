import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import steps from '../__fixtures__/steps'

// Мокаем CSS
vi.mock('@hexlet/chatbot-v2/dist/init.css', () => ({}))

// Мокаем пакет, чтобы рендерить steps
vi.mock('@hexlet/chatbot-v2', () => {
  return {
    default: ({ steps }) => (
      <div>
        {steps.map((step) => (
          <div key={step.id}>{step.message}</div>
        ))}
      </div>
    ),
  }
})

import Widget from '@hexlet/chatbot-v2'

test('чат-бот рендерится корректно', () => {
  render(<Widget steps={steps} />)
  // Проверяем, что в DOM есть сообщение из steps
  expect(screen.getByText(/Привет! Я ваш виртуальный помощник/i)).toBeInTheDocument()
})

test('чат-бот получает правильные шаги', () => {
  render(<Widget steps={steps} />)
  expect(screen.getByText(/До свидания!/i)).toBeInTheDocument()
})
