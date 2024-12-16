import dynamic from 'next/dynamic'
import { SearchParams } from 'nuqs'

import axiosInstance from '@/lib/axios'
import { ApiResponse, User } from '@/@types'
import { searchParamsCache } from '@/lib/searchParams'

const UserListPage = dynamic(() => import('@/containers/user-list-page'))

type QueryParameter = {
  page?: number
  limit?: number
  search: string | null
}

async function getUsersData(query: QueryParameter) {
  const { page, limit, search } = query
  const res = await axiosInstance.get('/users', {
    params: {
      pageNumber: page,
      pageSize: limit,
      keyword: search
    }
  })
  const { code, data } = res.data as ApiResponse<User[]>

  if (code !== 200 || !data) {
    throw new Error(`Failed to fetch data`)
  }

  return data
}

type UserListProps = {
  searchParams: SearchParams
}

const UserList: React.FC<UserListProps> = async ({ searchParams }) => {
  searchParamsCache.parse(searchParams)
  const page = searchParamsCache.get('page')
  const limit = searchParamsCache.get('limit')
  const search = searchParamsCache.get('search')

  const data = await getUsersData({ page, limit, search })

  return (
    <>
      <UserListPage data={data} />
    </>
  )
}

export default UserList
