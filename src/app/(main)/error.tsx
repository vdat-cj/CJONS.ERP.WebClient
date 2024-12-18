'use client' // Error components must be Client Components

import { actionMessages } from '@/constants/messages'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'sonner'

type ErrorProps = { error: Error & { digest?: string }; reset: () => void }

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (axios.isAxiosError(error)) {
      // Handling AxiosError with specific error status
      switch (error.response?.status) {
        case 403:
          toast.error(error.response?.data?.message || actionMessages.noPermission)
        case 400:
          toast.error(error.response?.data?.message || actionMessages.badRequest)
        default:
          toast.error(error.response?.data?.message || actionMessages.serverError)
      }
    }
  }, [error])

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            500
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
            Internal Server Error.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            We are already working to solve the problem.
          </p>
        </div>
      </div>
    </section>
  )
}
