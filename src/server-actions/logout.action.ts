'use server'

import { cookies } from 'next/headers'

import { ActionResponse } from '@/@types'
import { ACCESS_TOKEN } from '@/configs/constants'

const logoutAction = async (): Promise<ActionResponse<null>> => {
  try {
    const cookieStore = cookies()

    cookieStore.delete(ACCESS_TOKEN)

    return {
      success: true
    }
  } catch {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export default logoutAction
