'use server'

import type { ActionError, ActionSuccess, ApiResponse, User } from '@/@types'
import { actionMessages } from '@/constants/messages'
import handleActionError from '@/helpers/handleActionError'
import axiosInstance from '@/lib/axios'
import { changePasswordSchema, editUserSchema, userSchema } from '@/schemas'
import type { z } from 'zod'

const addUser = async (
  formData: z.infer<typeof userSchema>,
  userCreatedId: number
): Promise<ActionSuccess | ActionError> => {
  try {
    const { data: resData } = await axiosInstance.post('/users', JSON.stringify({ ...formData, userCreatedId }))

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 201) {
      return {
        success: false,
        message: message || actionMessages.user.addFailed
      }
    }

    return {
      success: true,
      message: actionMessages.user.addSuccess
    }
  } catch (error) {
    return handleActionError(error)
  }
}

const updateUser = async (formData: z.infer<typeof editUserSchema>): Promise<ActionSuccess | ActionError> => {
  try {
    const { data: resData } = await axiosInstance.put('/users', JSON.stringify({ ...formData }))

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 200) {
      return {
        success: false,
        message: message || actionMessages.user.updateFailed
      }
    }

    return {
      success: true,
      message: actionMessages.user.updateSuccess
    }
  } catch (error) {
    return handleActionError(error)
  }
}

const updatePassword = async (formData: z.infer<typeof changePasswordSchema>): Promise<ActionSuccess | ActionError> => {
  try {
    const { data: resData } = await axiosInstance.put('/auth/change-password', JSON.stringify({ ...formData }))

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 200) {
      return {
        success: false,
        message: message || actionMessages.user.updateFailed
      }
    }

    return {
      success: true,
      message: message || actionMessages.user.updateSuccess
    }
  } catch (error) {
    return handleActionError(error)
  }
}

const deleteUser = async (userId: number): Promise<ActionSuccess | ActionError> => {
  try {
    const { data: resData } = await axiosInstance.delete(`/users/${userId}`)

    const result = resData as ApiResponse<User>
    const { code, message } = result

    if (code !== 200) {
      return {
        success: false,
        message: message || actionMessages.user.deleteFailed
      }
    }

    return {
      success: true,
      message: actionMessages.user.deleteSuccess
    }
  } catch (error) {
    return handleActionError(error)
  }
}

export { addUser, deleteUser, updateUser, updatePassword }
