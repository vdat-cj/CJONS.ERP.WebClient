'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { loginSchema } from '@/schemas'
import axiosInstance from '@/lib/axios'
import { ACCESS_TOKEN } from '@/configs/constants'
import { ActionError, ActionSuccessWithData, ApiResponse } from '@/@types'
import handleActionError from '@/helpers/handleActionError'
import { actionMessages } from '@/constants/messages'

const loginAction = async (
  formData: z.infer<typeof loginSchema>
): Promise<ActionSuccessWithData<{ token: string }> | ActionError> => {
  try {
    const res = await axiosInstance.post('/auth/login', formData)

    const result = res.data as ApiResponse<{ token: string }>
    const { code, message, data } = result

    if (code !== 200 || !data?.token) {
      return {
        success: false,
        message: message || actionMessages.login.error
      }
    }

    const cookieStore = cookies()
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60 * 24 * 30)
    cookieStore.set(ACCESS_TOKEN, data.token, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })

    return {
      success: true,
      message: message || actionMessages.login.success,
      data
    }
  } catch (error) {
    return handleActionError(error)
  }
}

export default loginAction
