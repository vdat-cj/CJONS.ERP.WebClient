import { Suspense } from 'react'

import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
const UserForm = dynamic(() => import('@/components/forms/user-form'))

import axiosInstance from '@/lib/axios'
import { ApiResponse, Role } from '@/@types'
import dynamic from 'next/dynamic'

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
  return (
    <Suspense fallback={<UserFormSkeleton />}>
      <UserForm roles={roles} />
    </Suspense>
  )
}

export default NewUserPage
