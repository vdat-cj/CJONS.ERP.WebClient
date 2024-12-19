import PageContainer from '@/components/layout/page-container'
import dynamic from 'next/dynamic'

const NewUserPage = dynamic(() => import('@/containers/new-user-page'))

export const revalidate = false

const NewUser: React.FC = () => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <NewUserPage />
      </div>
    </PageContainer>
  )
}

export default NewUser
