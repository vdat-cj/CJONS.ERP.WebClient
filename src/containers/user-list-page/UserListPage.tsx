import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// - components
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import PageContainer from '@/components/layout/page-container'
import TableSkeleton from '@/components/skeletons/table-skeleton'
import { User } from '@/@types'

const UserTable = dynamic(() => import('@/components/tables/user-table'), { ssr: false })

type UserListPageProps = {
  data: User[]
}

const UserListPage: React.FC<UserListPageProps> = ({ data }) => {
  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading level={2}>{`User Management`}</Heading>
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
