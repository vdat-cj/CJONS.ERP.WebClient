/* eslint-disable no-unused-vars */
const CHANGE_PASSWORD_FIELDS = [
  { name: 'newPassword' as const, label: 'New Password', placeholder: 'Enter your new password', type: 'password' },
  {
    name: 'confirmNewPassword' as const,
    label: 'Confirm New Password',
    placeholder: 'Enter your confirm new password',
    type: 'password'
  }
] as const

export { CHANGE_PASSWORD_FIELDS }
