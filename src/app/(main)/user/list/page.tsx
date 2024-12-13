import dynamic from 'next/dynamic'

import axiosInstance from '@/lib/axios'
import { ApiResponse, User } from '@/@types'

const UserListPage = dynamic(() => import('@/containers/user-list-page'))

async function getUsersData() {
  const res = await axiosInstance.get('/users')
  const { code, data } = res.data as ApiResponse<User[]>

  if (code !== 200 || !data) {
    throw new Error(`Failed to fetch data`)
  }

  return data
}

const UserList: React.FC = async () => {
  const data = await getUsersData()

  return (
    <>
      <UserListPage data={data} />
    </>
  )
}

export default UserList
