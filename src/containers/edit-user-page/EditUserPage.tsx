import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import axiosInstance from '@/lib/axios'
import { ApiResponse, Role, User } from '@/@types'

import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
const ChangePasswordForm = dynamic(() => import('@/components/forms/change-password-form'))
const EditUserForm = dynamic(() => import('@/components/forms/edit-user-form'))

type EditUserPageProps = {
  user: User
}

const getRoles = async () => {
  const res = await axiosInstance.get('/auth/roles')
  const { data } = res.data as ApiResponse<Role[]>
  if (!data) {
    throw new Error('Failed to fetch roles')
  }
  return data
}

const getUserById = async (id: number) => {
  const res = await axiosInstance.get(`/users/${id}`)
  const { data } = res.data as ApiResponse<Role[]>
  if (!data) {
    throw new Error('Failed to fetch user by id: ' + id)
  }
  return data
}

const EditUserPage: React.FC<EditUserPageProps> = async () => {
  const roles = await getRoles()

  return (
    <>
      <Suspense fallback={<UserFormSkeleton />}>
        <EditUserForm roles={roles} />
      </Suspense>
      <Suspense fallback={<UserFormSkeleton />}>
        <ChangePasswordForm />
      </Suspense>
    </>
  )
}

export default EditUserPage
