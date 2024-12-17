import PageContainer from '@/components/layout/page-container'
import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const NewUserPage = dynamic(() => import('@/containers/new-user-page'))

const NewUser: React.FC = () => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<UserFormSkeleton />}>
          <NewUserPage />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default NewUser
