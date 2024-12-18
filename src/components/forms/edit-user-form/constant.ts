/* eslint-disable no-unused-vars */
const EDIT_USER_FIELDS = [
  { name: 'userName' as const, label: 'User Name', placeholder: 'Enter your username', type: 'text' },
  { name: 'fullName' as const, label: 'Full Name', placeholder: 'Enter your full name', type: 'text' },
  { name: 'email' as const, label: 'Email', placeholder: 'Enter your email address', type: 'text' }
] as const

export { EDIT_USER_FIELDS }
