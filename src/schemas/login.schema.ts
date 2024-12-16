import { z } from 'zod'

import { validationMessages } from '@/constants/messages'

const messages = validationMessages.login

export const loginSchema = z.object({
  username: z.string({ required_error: messages.username.required }).min(1, messages.username.min),
  password: z.string({ required_error: messages.password.required }).min(1, messages.username.min)
})
