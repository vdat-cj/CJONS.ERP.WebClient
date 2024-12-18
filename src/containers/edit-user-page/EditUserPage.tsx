import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import axiosInstance from '@/lib/axios'
import { ApiResponse, Role, UserWithIds } from '@/@types'

import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
import { redirect } from 'next/navigation'
const ChangePasswordForm = dynamic(() => import('@/components/forms/change-password-form'))
const EditUserForm = dynamic(() => import('@/components/forms/edit-user-form'))

type EditUserPageProps = {
  userId: number
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
  if (isNaN(id)) {
    redirect('/user/list')
  }
  const res = await axiosInstance.get(`/users/${id}`)
  const { data } = res.data as ApiResponse<UserWithIds>
  if (!data) {
    redirect('/user/not-found')
  }
  return data
}

const EditUserPage: React.FC<EditUserPageProps> = async ({ userId }) => {
  const roles = await getRoles()
  const user = await getUserById(userId)

  return (
    <>
      <Suspense fallback={<UserFormSkeleton />}>
        <EditUserForm roles={roles} user={user} />
      </Suspense>
      <Suspense fallback={<UserFormSkeleton />}>
        <ChangePasswordForm userId={userId} />
      </Suspense>
    </>
  )
}

export default EditUserPage
