import { z } from 'zod'

import { validationMessages } from '@/constants/messages'

const messages = validationMessages.user

export const userSchema = z.object({
  userName: z.string({ required_error: messages.userName.required }).min(1, messages.fullName.min),
  password: z.string({ required_error: messages.password.required }).min(1, messages.password.min),
  fullName: z.string({ required_error: messages.fullName.required }).min(1, messages.fullName.min),
  email: z.string({ required_error: messages.email.required }).email({ message: messages.email.invalid }),
  roleId: z.string({ required_error: messages.roleId.required })
})

export const changePasswordSchema = z
  .object({
    password: z.string({ required_error: messages.password.required }).min(1, messages.password.min),
    confirmPassword: z
      .string({ required_error: messages.confirmPassword.required })
      .min(1, messages.confirmPassword.min)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })
