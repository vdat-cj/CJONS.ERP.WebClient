'use server'

import { cookies } from 'next/headers'

import { ACCESS_TOKEN } from '@/configs/constants'
import { ActionError, ActionSuccess } from '@/@types'
import { actionMessages } from '@/constants/messages'

const logoutAction = async (): Promise<ActionSuccess | ActionError> => {
  try {
    const cookieStore = cookies()

    cookieStore.delete(ACCESS_TOKEN)

    return {
      success: true,
      message: actionMessages.logout.success
    }
  } catch {
    return {
      success: false,
      message: actionMessages.serverError
    }
  }
}

export default logoutAction
