'use client' // Error components must be Client Components

import { useEffect } from 'react'

import ErrorPage from '@/containers/error-page'

type ErrorProps = { error: Error & { digest?: string }; reset: () => void }

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])

  return <ErrorPage />
}
