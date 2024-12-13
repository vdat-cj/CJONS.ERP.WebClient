import Image from 'next/image'

const HomePage = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex h-full flex-col items-center justify-center gap-5 space-x-4'>
        <Image src='/images/logo/CJ_OliveNetworks_CI.png' width={506} height={135} alt='CJ OliveNetworks Vina' />
        <h1 className='text-3xl font-semibold'>Internal Management System</h1>
      </div>
    </main>
  )
}

export default HomePage
