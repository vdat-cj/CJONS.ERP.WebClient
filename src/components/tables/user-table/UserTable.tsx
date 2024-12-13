'use client'

import { User } from '@/@types'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './columns'

type UserTableProps = {
  data: User[]
  totalData: number
}

const UserTable: React.FC<UserTableProps> = ({ data, totalData }) => {
  return (
    <div className='space-y-4'>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default UserTable
