// vitest.setup.js

import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'

global.userEvent = userEvent
