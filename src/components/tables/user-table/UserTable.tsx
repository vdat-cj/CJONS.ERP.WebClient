'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { DataTable } from '@/components/ui/table/data-table'
import { DataTableSearch } from '@/components/ui/table/data-table-search'

import { User } from '@/@types'
import { columns } from './columns'
import { cn } from '@/lib/utils'
import useUserTableFilters from './useUserTableFilters'

type UserTableProps = {
  data: User[]
  totalData: number
}

const UserTable: React.FC<UserTableProps> = ({ data, totalData }) => {
  const { searchQuery, setPage, setSearchQuery } = useUserTableFilters()
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <DataTableSearch
          searchKey='name, email'
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <Link href={'/user/new'} className={cn(buttonVariants({ variant: 'default' }))}>
          <Plus className='mr-2 h-4 w-4' /> Add User
        </Link>
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default UserTable
