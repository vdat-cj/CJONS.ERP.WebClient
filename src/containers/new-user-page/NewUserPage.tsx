import { ApiResponse, Role } from '@/@types'
import UserForm from '@/components/forms/user-form'
import axiosInstance from '@/lib/axios'

const getRoles = async () => {
  const res = await axiosInstance.get('/auth/roles')
  const { data } = res.data as ApiResponse<Role[]>
  if (!data) {
    throw new Error('Failed to fetch roles')
  }
  return data
}

const NewUserPage = async () => {
  const roles = await getRoles()
  return <UserForm roles={roles} />
}

export default NewUserPage
