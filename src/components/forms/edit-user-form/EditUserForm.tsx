'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { toast } from 'sonner'

// - components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { updateUser } from '@/server-actions/user.action'
import { actionMessages } from '@/constants/messages'
import { EDIT_USER_FIELDS } from './constant'
import { UserWithIds, Role } from '@/@types'
import { editUserSchema } from '@/schemas'
import { handleServerErrors } from '@/helpers/handleServerErrors'

type EditUserFormProps = {
  roles: Role[]
  user: UserWithIds
}

const EditUserForm: React.FC<EditUserFormProps> = ({ roles, user }) => {
  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      id: user.id,
      memberId: user.memberId,
      email: user.email,
      fullName: user.fullName,
      roleId: user.roleId.toString(),
      userName: user.userName
    }
  })

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof editUserSchema>) => {
    setIsLoading(true)

    const result = await updateUser(values)

    if (!result.success) {
      toast.error(result.message)
      if (result.errors) {
        handleServerErrors(result.errors, form.setError)
      }
      setIsLoading(false)
      return
    }

    toast.success(actionMessages.user.updateSuccess)
    router.push('/user/list')
    router.refresh()

    setIsLoading(false)
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>Edit User</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {/* Information */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {EDIT_USER_FIELDS.map((item) => (
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
                            {role.roleName}
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
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default EditUserForm
