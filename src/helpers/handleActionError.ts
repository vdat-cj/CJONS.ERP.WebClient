import axios from 'axios'

import { actionMessages } from '@/constants/messages'
import { ActionError } from '@/@types'

const handleActionError = (error: unknown): ActionError => {
  if (axios.isAxiosError(error)) {
    // Handling AxiosError with specific error status
    switch (error.response?.status) {
      case 403:
        return {
          success: false,
          message: error.response?.data?.message || actionMessages.noPermission
        }
      case 400:
        return {
          success: false,
          message: error.response?.data?.message || actionMessages.badRequest,
          errors: error.response?.data?.errors
        }
      default:
        return {
          success: false,
          message: error.response?.data?.message || actionMessages.serverError
        }
    }
  }

  // Fallback error handling if it's not an AxiosError
  return {
    success: false,
    message: actionMessages.serverError
  }
}

export default handleActionError
