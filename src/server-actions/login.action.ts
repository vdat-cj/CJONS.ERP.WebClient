'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { loginSchema } from '@/schemas'
import axiosInstance from '@/lib/axios'
import { ACCESS_TOKEN } from '@/configs/constants'
import { ActionResponse, ApiResponse } from '@/@types'
import handleActionError from '@/helpers/handleActionError'
import { actionMessages } from '@/constants/messages'

type LoginResponse = ApiResponse<{ token: string }>

const loginAction = async (formData: z.infer<typeof loginSchema>): Promise<ActionResponse<{ token: string }>> => {
  try {
    const res = await axiosInstance.post('/auth/login', formData)

    const result = res.data as LoginResponse
    const { code, message, data } = result

    if (code !== 200 || !data?.token) {
      return {
        success: false,
        error: message || actionMessages.login.error
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
      data
    }
  } catch (error) {
    return handleActionError(error)
  }
}

export default loginAction
