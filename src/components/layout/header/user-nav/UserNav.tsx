'use client'

import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

// components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

// server-actions
import { logoutAction } from '@/server-actions'

import axiosInstance from '@/lib/axiosClient'
import { ApiResponse, UserInfo } from '@/@types'
import { envClientConfig } from '@/configs/envClient'
import { USER_ID } from '@/configs/constants'

const UserNav: React.FC = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<UserInfo>()

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axiosInstance.get('/auth/profile')
        const { code, data } = res.data as ApiResponse<UserInfo>
        if (code === 200 && data) {
          localStorage.setItem(USER_ID, data.id.toString())
          setUserInfo(data)
        }
      } catch {
        router.push('/auth/login')
      }
    }
    fetchInfo()
  }, [router])

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
            <AvatarImage
              src={
                userInfo?.memberImage
                  ? `${envClientConfig.DOMAIN_IMAGE}${userInfo?.memberImage}`
                  : '/images/logo/CJ_logo_Icon.png'
              }
              alt={userInfo?.userName ?? ''}
            />
            <AvatarFallback>{userInfo?.userName?.[0]}</AvatarFallback>
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
