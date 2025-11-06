const steps = [
  {
    id: 'welcome',
    messages: ['Привет! Я ваш виртуальный помощник.'],
    buttons: [
      { text: 'Начать разговор', nextStepId: 'start', type: 'button' },
    ],
  },
  {
    id: 'start',
    messages: ['Выберите категорию вопроса.'],
    buttons: [
      { text: 'Попробовать себя в IT', nextStepId: 'try', type: 'button' },
    ],
  },
  {
    id: 'try',
    messages: ['У нас есть подготовительные курсы.'],
    buttons: [
      { text: 'Вернуться назад', nextStepId: 'start', type: 'button' },
    ],
  },
]

export default steps
