import Image from 'next/image'

const HomePage = () => {
  return (
    <main className='w-full'>
      <div className='flex h-screen flex-col items-center justify-center space-x-4'>
        <Image
          src='/images/logo/CJ_OliveNetworks_CI.png'
          width={506}
          height={135}
          className='w-1/3'
          alt='CJ OliveNetworks Vina'
        />
        <h1 className='text-xl font-semibold'>Internal Management System</h1>
      </div>
    </main>
  )
}

export default HomePage
