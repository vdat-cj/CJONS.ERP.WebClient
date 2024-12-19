'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

// - components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

// - actions
import { loginAction } from '@/server-actions'

import { loginSchema } from '@/schemas'
import { ACCESS_TOKEN } from '@/configs/constants'
import { handleServerErrors } from '@/helpers/handleServerErrors'

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const router = useRouter()

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true)

    const result = await loginAction(values)

    if (!result.success) {
      toast.error(result.message)
      if (result.errors) {
        handleServerErrors(result.errors, form.setError)
      }
      return
    }

    // save toke for client side using call api
    localStorage.setItem(ACCESS_TOKEN, result.data.token)

    toast.success(result.message)

    setIsLoading(false)
    router.push('/')
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Username' {...field} />
              </FormControl>
              <FormDescription>Please enter your username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Example@123' {...field} />
              </FormControl>
              <FormDescription>Please enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
