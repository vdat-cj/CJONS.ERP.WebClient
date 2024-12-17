'use client'

import { DataTable } from '@/components/ui/table/data-table'
import { DataTableSearch } from '@/components/ui/table/data-table-search'

import { User } from '@/@types'
import { columns } from './columns'
import useUserTableFilters from './useUserTableFilters'

type UserTableProps = {
  data: User[]
  totalData: number
}

const UserTable: React.FC<UserTableProps> = ({ data, totalData }) => {
  const { searchQuery, setPage, setSearchQuery } = useUserTableFilters()
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <DataTableSearch
          searchKey='name, email'
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default UserTable
