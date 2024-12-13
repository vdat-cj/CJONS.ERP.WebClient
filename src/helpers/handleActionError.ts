import { ActionResponse } from '@/@types'
import axios from 'axios'

const handleActionError = (error: unknown): ActionResponse<never> => {
  if (axios.isAxiosError(error)) {
    // Handling AxiosError with specific error status
    switch (error.response?.status) {
      case 403:
        return {
          success: false,
          error: 'You are not allowed to perform this action!'
        }
      case 400:
        return {
          success: false,
          error: 'Bad Request. Please check your input.'
        }
      default:
        return {
          success: false,
          error: error.response?.data?.message || 'An error occurred. Please try again later.'
        }
    }
  }

  // Fallback error handling if it's not an AxiosError
  return {
    success: false,
    error: 'An error occurred. Please try again later.'
  }
}

export default handleActionError
