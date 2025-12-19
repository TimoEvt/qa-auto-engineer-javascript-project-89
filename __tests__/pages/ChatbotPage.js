import { screen } from '@testing-library/react'

export class ChatbotPage {
  constructor() {
    this.registerButton = () => screen.getByRole('button', { name: 'Зарегистрироваться' });
  }

  async clickRegister() {
    this.registerButton().click();
  }

  async hasMessage(text) {
    return screen.getByText(String(text));
  }
}

