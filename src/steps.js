const steps = [
  { id: 'start', message: 'Привет! Чем могу помочь?', trigger: 'user_input' },
  { id: 'user_input', user: true, trigger: 'response' },
  { id: 'response', message: 'Интересно! Расскажи подробнее.', trigger: 'user_input' }
]

export default steps

