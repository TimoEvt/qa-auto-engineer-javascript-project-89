import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

global.userEvent = userEvent
import { vi } from 'vitest'; vi.mock('@hexlet/chatbot-v2/dist/init.css', () => ({}))
