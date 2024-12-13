'use client'

import { toast } from 'sonner'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

// components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

// server-actions
import { logoutAction } from '@/server-actions'

const UserNav: React.FC = () => {
  const router = useRouter()
  const user = {
    userName: 'dat.truongvan@cj.net',
    image: 'https://erp.cjolivenetworks.vn/images/emp/514b10ae2753428db4d3a99324631617.jpg'
  }

  async function handleLogout() {
    const { success } = await logoutAction()
    if (!success) {
      toast.error('Logout failed!')
      return
    }
    toast.success('Logged out successfully')
    router.push('/auth/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-10 w-10 rounded-full'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src={user?.image ?? ''} alt={user?.userName ?? ''} />
            <AvatarFallback>{user?.userName?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav
