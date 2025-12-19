import { screen } from '@testing-library/react'

export class AppPage {
  constructor() {
    this.heading = () => screen.getByRole('heading', { name: /чат/i }); // или точный заголовок приложения
    this.widgetContainer = () => screen.getByTestId('chat-widget'); // или другой локатор виджета
    this.registerButton = () => screen.getByRole('button', { name: 'Зарегистрироваться' })
  }

  async open() {
    // Если нужно переходить на главную страницу
    // await page.goto('/')
  }

  async hasWidget() {
    return this.widgetContainer()
  }

  async clickRegisterInApp() {
    await this.registerButton().click()
  }
}
