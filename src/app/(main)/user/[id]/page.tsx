import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import PageContainer from '@/components/layout/page-container'
import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
const EditUserPage = dynamic(() => import('@/containers/edit-user-page'))

type EditUserProps = {
  params: {
    userId: string
  }
}

const EditUser: React.FC<EditUserProps> = ({ params }) => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<UserFormSkeleton />}>
          <EditUserPage userId={params.userId} />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default EditUser
