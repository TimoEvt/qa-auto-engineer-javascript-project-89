import { render } from '@testing-library/react'
import React from 'react'
import Chatbot from '@hexlet/chatbot-v2'
import { ChatbotPage } from '../pages/ChatbotPage'

describe('Chatbot: крайние случаи с Page Object', () => {
  test('Рендер без шагов', () => {
    render(<Chatbot steps={[]} />)
    const page = new ChatbotPage()
    page.registerButton()
  })

  test('Рендер с некорректными шагами', () => {
    const steps = [{ id: 1 }, { id: 2, message: null }, { id: 3, message: 123 }]
    render(<Chatbot steps={steps} />)
    const page = new ChatbotPage()
    page.registerButton()
    page.hasMessage(123)
  })

  test('Рендер с дублирующимися id', () => {
    const steps = [{ id: 1, message: 'Step 1' }, { id: 1, message: 'Step 1 duplicate' }]
    render(<Chatbot steps={steps} />)
    const page = new ChatbotPage()
    page.hasMessage('Step 1')
    page.hasMessage('Step 1 duplicate')
  })
})

