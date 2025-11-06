import React from 'react'
import ReactDOM from 'react-dom/client'
import Widget from '@hexlet/chatbot-v2'               // импорт виджета
import steps from '@hexlet/chatbot-v2/example-steps'  // пример шагов
import '@hexlet/chatbot-v2/styles'                    // стили виджета

const container = document.getElementById('root')
ReactDOM.createRoot(container).render(
  Widget(steps) // рендер виджета с шагами
)
