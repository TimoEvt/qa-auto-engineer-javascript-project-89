import { render, screen } from '@testing-library/react'
import React from 'react'
import Chatbot from '@hexlet/chatbot-v2'

describe('Chatbot: крайние случаи', () => {
  test('Рендер без шагов', () => {
    render(<Chatbot steps={[]} />)
    expect(screen.getByRole('button', { name: 'Зарегистрироваться' })).toBeInTheDocument()
  })

  test('Рендер с некорректными шагами', () => {
    const steps = [{ id: 1 }, { id: 2, message: null }, { id: 3, message: 123 }]
    render(<Chatbot steps={steps} />)
    expect(screen.getByRole('button', { name: 'Зарегистрироваться' })).toBeInTheDocument()
    expect(screen.queryByText('123')).toBeInTheDocument()
  })

  test('Рендер с дублирующимися id', () => {
    const steps = [{ id: 1, message: 'Step 1' }, { id: 1, message: 'Step 1 duplicate' }]
    render(<Chatbot steps={steps} />)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 1 duplicate')).toBeInTheDocument()
  })
})
