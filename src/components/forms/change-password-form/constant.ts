/* eslint-disable no-unused-vars */
const CHANGE_PASSWORD_FIELDS = [
  { name: 'password' as const, label: 'Password', placeholder: 'Enter your password', type: 'password' },
  {
    name: 'confirmPassword' as const,
    label: 'Confirm Password',
    placeholder: 'Enter your confirm password',
    type: 'password'
  }
] as const

export { CHANGE_PASSWORD_FIELDS }
