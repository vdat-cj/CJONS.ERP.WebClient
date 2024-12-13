import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string({ required_error: 'Username là bắt buộc!' }).min(1, 'Username là bắt buộc!'),
  password: z.string({ required_error: 'Mật khẩu là bắt buộc' }).min(1, 'Mật khẩu là bắt buộc!')
})
