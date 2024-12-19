import { z } from 'zod'

import { validationMessages } from '@/constants/messages'

const messages = validationMessages.user

export const userSchema = z.object({
  userName: z
    .string({ required_error: messages.userName.required })
    .min(3, messages.userName.min)
    .max(50, messages.userName.max),
  password: z
    .string({ required_error: messages.password.required })
    .min(6, messages.password.min)
    .max(100, messages.password.max),
  fullName: z.string({ required_error: messages.fullName.required }).max(100, messages.fullName.max),
  email: z
    .string({ required_error: messages.email.required })
    .email({ message: messages.email.invalid })
    .max(100, messages.email.max),
  roleId: z.string({ required_error: messages.roleId.required })
})

export const editUserSchema = z.object({
  id: z.coerce.number(),
  memberId: z.coerce.number(),
  userName: z
    .string({ required_error: messages.userName.required })
    .min(3, messages.userName.min)
    .max(50, messages.userName.max),
  fullName: z.string({ required_error: messages.fullName.required }).max(100, messages.fullName.max),
  email: z
    .string({ required_error: messages.email.required })
    .email({ message: messages.email.invalid })
    .max(100, messages.email.max),
  roleId: z.string({ required_error: messages.roleId.required })
})

export const changePasswordSchema = z
  .object({
    userId: z.coerce.number(),
    newPassword: z
      .string({ required_error: messages.password.required })
      .min(6, messages.password.min)
      .max(100, messages.password.max),
    confirmNewPassword: z
      .string({ required_error: messages.confirmPassword.required })
      .min(1, messages.confirmPassword.min)
      .max(100, messages.confirmPassword.max)
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ['confirmNewPassword']
  })
