'use client'

// - components
import UserNav from './user-nav'
import Notification from './notification'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'

const Header: React.FC = () => {
  const { isMobile } = useSidebar()

  return (
    <header className='flex h-16 items-center justify-between border-b bg-primary-foreground px-6 py-6 lg:px-12'>
      <div>{isMobile && <SidebarTrigger />}</div>
      <div className='flex items-center gap-4'>
        <Notification />
        <UserNav />
      </div>
    </header>
  )
}

export default Header
