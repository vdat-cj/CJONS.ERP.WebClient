import PageContainer from '@/components/layout/page-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <div className='mx-auto flex h-full max-w-screen-xl flex-col justify-center px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
            Something&apos;s missing.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.{' '}
          </p>
          <Button>
            <Link href='/'>Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
