'use server'

import { ActionResponse, ApiResponse, User } from '@/@types'
import axiosInstance from '@/lib/axios'

const getUsers = async (): Promise<ActionResponse<User[]>> => {
  try {
    const res = await axiosInstance.get('/users')

    const result = res.data as ApiResponse<User[]>
    const { data } = result

    return {
      success: true,
      data
    }
  } catch {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export { getUsers }
