import LoginForm from '@/components/forms/login-form'
import Image from 'next/image'

const LoginPage: React.FC = () => {
  return (
    <main className='z-10 flex min-h-screen w-full items-center justify-center space-y-4 px-4 py-4'>
      <div className='flex min-h-fit w-full flex-col items-center rounded-md bg-white p-4 lg:w-2/3 lg:flex-row'>
        <div className='flex h-full w-1/3 flex-col items-center justify-around gap-2 py-4'>
          <div className='py-4'>
            <Image src='/images/logo/CJ_OliveNetworks_CI.png' alt='Logo' width={167} height={45} />
          </div>
          <div className='mb-10 mt-28'>
            <Image src='/images/spot-illustrations/auth.png' alt='spot-illustrations' width={287} height={227} />
          </div>
        </div>
        <div className='flex h-full w-full flex-col justify-center gap-5 px-4 lg:w-2/3 lg:px-20'>
          <h1 className='text-center text-4xl'>Login</h1>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
