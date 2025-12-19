import { test, expect } from '@playwright/test'
import { ChatbotPage } from '__fixtures__/steps/chatbot.page.js'

test('виджет отображает кнопку регистрации', async ({ page }) => {
  await page.goto('http://localhost:5000') // или правильный URL вашего запущенного приложения

  const chatbot = new ChatbotPage()

  await expect(chatbot.registerButton()).toBeVisible()
})
