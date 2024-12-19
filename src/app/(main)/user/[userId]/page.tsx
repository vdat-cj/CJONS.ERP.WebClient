import dynamic from 'next/dynamic'

import PageContainer from '@/components/layout/page-container'
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
        <EditUserPage userId={+params.userId} />
      </div>
    </PageContainer>
  )
}

export default EditUser
