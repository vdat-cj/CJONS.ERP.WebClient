'use server'

import type { ActionResponse, ApiResponse, User } from '@/@types'
import { actionMessages } from '@/constants/messages'
import handleActionError from '@/helpers/handleActionError'
import axiosInstance from '@/lib/axios'
import { userSchema } from '@/schemas'
import type { z } from 'zod'

const addUser = async (formData: z.infer<typeof userSchema>, userCreatedId: number): Promise<ActionResponse<null>> => {
  try {
    const { data: resData } = await axiosInstance.post('/users', JSON.stringify({ ...formData, userCreatedId }))

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 201) {
      return {
        success: false,
        error: message || actionMessages.user.addFailed
      }
    }

    return {
      success: true,
      data: null
    }
  } catch (error) {
    return handleActionError(error)
  }
}

const deleteUser = async (userId: number): Promise<ActionResponse<null>> => {
  try {
    const { data: resData } = await axiosInstance.delete(`/users/${userId}`)

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 204) {
      return {
        success: false,
        error: message || actionMessages.user.deleteFailed
      }
    }

    return {
      success: true
    }
  } catch (error) {
    return handleActionError(error)
  }
}

export { addUser, deleteUser }
