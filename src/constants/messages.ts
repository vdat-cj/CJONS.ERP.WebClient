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
  },
  user: {
    userName: {
      required: 'Username is required!',
      min: 'Username should be at least 3 characters long!',
      max: 'Username should be less than 50 characters long'
    },
    password: {
      required: 'Password is required!',
      min: 'Password should be at least 6 character long!',
      max: 'Password should be less than 100 characters long'
    },
    confirmPassword: {
      required: 'Confirm password is required!',
      min: 'Confirm password should be at least 1 character long!',
      max: 'Confirm password should be less than 100 characters long'
    },
    fullName: {
      required: 'Full name is required!',
      max: 'Full name should be less than 100 characters long'
    },
    email: {
      required: 'Email address is required!',
      invalid: 'Invalid email format!',
      max: 'Email should be less than 100 characters long'
    },
    roleId: {
      required: 'Role ID is required!'
    }
  }
} as const

export const actionMessages = {
  login: {
    success: 'Login successful!',
    error: 'Invalid username or password!'
  },
  logout: {
    success: 'Logout successful!'
  },
  user: {
    addSuccess: 'Add user successfully!',
    addFailed: 'Add user failed!',
    deleteSuccess: 'Delete user successfully!',
    deleteFailed: 'Delete user failed!',
    updateSuccess: 'Update user successfully!',
    updateFailed: 'Update user failed!',
    updatePasswordSuccess: 'Update password successfully'
  },
  noPermission: 'You are not allowed to perform this action!',
  badRequest: 'Bad Request. Please check your input.',
  serverError: 'An error occurred. Please try again later!'
} as const
