'use client' // Error components must be Client Components

import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { actionMessages } from '@/constants/messages'
import ErrorPage from '@/containers/error-page'

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

  return <ErrorPage />
}
