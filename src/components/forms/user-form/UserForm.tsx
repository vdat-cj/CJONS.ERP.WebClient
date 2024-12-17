'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { addUser } from '@/server-actions/user.action'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { userSchema } from '@/schemas'
import { USER_FIELDS } from './constant'

type UserFormProps = {
  roles: { id: number; name: string }[]
}

const UserForm: React.FC<UserFormProps> = ({ roles }) => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema)
  })

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    setIsLoading(true)

    const result = await addUser(values)
    if (!result.success) {
      toast.error(result.error)
      return
    }
    router.push('/user/list')
    router.refresh()

    setIsLoading(false)
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>Add New User</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {/* Information */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {USER_FIELDS.map((item) => (
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
              <FormField
                control={form.control}
                name='roleId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Role Name' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem value={role.id.toString()} key={role.id}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full' disabled={isLoading}>
              Gửi
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UserForm
