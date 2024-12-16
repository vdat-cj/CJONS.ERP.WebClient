export const validationMessages = {
  login: {
    username: {
      required: 'Username is required!',
      min: 'Username should be at least 1 character long!'
    },
    password: {
      required: 'Password is required!',
      min: 'Password should be at least 1 character long!'
    }
  }
} as const

export const actionMessages = {
  login: {
    success: 'Login successful!',
    error: 'Invalid username or password!'
  },
  noPermission: 'You are not allowed to perform this action!',
  badRequest: 'Bad Request. Please check your input.',
  serverError: 'An error occurred. Please try again later!'
} as const
