'use client'

import { User } from '@/@types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'User ID'
  },
  {
    accessorKey: 'userName',
    header: 'User Name'
  },
  {
    accessorKey: 'fullName',
    header: 'Full Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'dateRegister',
    header: 'Date Register',
    cell: ({ row }) => new Date(row.original.dateRegister).toLocaleDateString()
  },
  {
    accessorKey: 'dateLastAccess',
    header: 'Date Last Access',
    cell: ({ row }) => new Date(row.original.dateLastAccess).toLocaleDateString()
  }
]
