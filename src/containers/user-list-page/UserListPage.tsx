import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// - components
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import PageContainer from '@/components/layout/page-container'
import TableSkeleton from '@/components/skeletons/table-skeleton'
import { User } from '@/@types'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
const UserTable = dynamic(() => import('@/components/tables/user-table'), { ssr: false })

type UserListPageProps = {
  data: User[]
}

const UserListPage: React.FC<UserListPageProps> = ({ data }) => {
  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading level={2}>{`User (${data.length})`}</Heading>
          <Link href={'/user/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <Suspense fallback={<TableSkeleton />}>
          <UserTable data={data} totalData={data.length} />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default UserListPage
