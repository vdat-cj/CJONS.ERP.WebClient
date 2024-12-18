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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { CHANGE_PASSWORD_FIELDS } from './constant'
import { changePasswordSchema } from '@/schemas'
import { actionMessages } from '@/constants/messages'
import { updatePassword } from '@/server-actions/user.action'

type ChangePasswordFormProps = {
  userId: number
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ userId }) => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      userId: userId,
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
    setIsLoading(true)

    const result = await updatePassword(values)

    if (!result.success) {
      toast.error(result.error)
      setIsLoading(false)
      return
    }

    toast.success(actionMessages.user.updatePasswordSuccess)
    form.reset()
    router.push('/user/list')

    setIsLoading(false)
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {/* Information */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {CHANGE_PASSWORD_FIELDS.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input type={item.type} placeholder={item.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <Button type='submit' className='w-full' disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ChangePasswordForm
