import axios from 'axios'

import { ActionResponse } from '@/@types'
import { actionMessages } from '@/constants/messages'

const handleActionError = (error: unknown): ActionResponse<never> => {
  if (axios.isAxiosError(error)) {
    // Handling AxiosError with specific error status
    switch (error.response?.status) {
      case 403:
        return {
          success: false,
          error: error.response?.data?.message || actionMessages.noPermission
        }
      case 400:
        return {
          success: false,
          error: error.response?.data?.message || actionMessages.badRequest
        }
      default:
        return {
          success: false,
          error: error.response?.data?.message || actionMessages.serverError
        }
    }
  }

  // Fallback error handling if it's not an AxiosError
  return {
    success: false,
    error: actionMessages.serverError
  }
}

export default handleActionError
