'use client'

import Link from 'next/link'
import Image from 'next/image'
import { TooltipArrow } from '@radix-ui/react-tooltip'

// - icons
import { ArrowLeftToLine, ChartPie, ChevronRight } from 'lucide-react'
import { Icons } from '@/components/icons'

// - components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { NAV_ITEMS } from '@/configs/constants'
import { cn } from '@/lib/utils'

import styles from './AppSideBar.module.scss'

const AppSidebar: React.FC = () => {
  const { open, state, toggleSidebar } = useSidebar()
  return (
    <Sidebar collapsible='icon' className='overflow-x-hidden'>
      <SidebarHeader className='flex h-16 items-center justify-center border-b'>
        <Link href='/' className='mx-auto'>
          {open ? (
            <Image src='/images/logo/CJ_OliveNetworks_CI.png' alt='CJ OliveNetworks Vina' width={180} height={48} />
          ) : (
            <Image src='/images/logo/CJ_logo_Icon.png' alt='CJ OliveNetworks Vina' width={48} height={48} />
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent className='gap-0 overflow-x-hidden py-4'>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem key='Home'>
              <SidebarMenuButton tooltip={{ className: 'border ml-2 text-black', children: <span>Home</span> }} asChild>
                <Link href='/'>
                  <ChartPie />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {NAV_ITEMS.map((item) => (
          <SidebarGroup key={item.label}>
            {item.menu.map((menuItem) => {
              const Icon = Icons[menuItem.icon]
              return (
                <SidebarMenu key={menuItem.key}>
                  <Collapsible defaultOpen className='group/collapsible'>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          key={menuItem.key}
                          tooltip={{
                            className: cn('bg-inherit overflow-hidden border-none ml-1 text-black'),
                            children: (
                              <div className={`${styles['tooltip-content']}`}>
                                {menuItem.subMenu.map((subMenuItem) => (
                                  <SidebarMenuSubButton className='hover:bg-primary' key={subMenuItem.key} asChild>
                                    <Link href={subMenuItem.url}>
                                      <span>{subMenuItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                ))}
                                <TooltipArrow className={styles['tooltip-arrow']} />
                              </div>
                            )
                          }}
                        >
                          {open && (
                            <ChevronRight className='transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                          )}
                          <Icon />
                          <span>{menuItem.title}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {menuItem.subMenu.map((subMenuItem) => (
                            <SidebarMenuSubItem key={subMenuItem.key}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subMenuItem.url} className='ml-10'>
                                  <span>{subMenuItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              )
            })}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className='flex h-16 items-center justify-center overflow-x-hidden overflow-y-hidden border-t p-0'>
        <SidebarGroup>
          <SidebarMenuButton
            tooltip={{ className: 'border ml-2', children: <span>Collapsed View</span> }}
            onClick={toggleSidebar}
          >
            <ArrowLeftToLine className={cn(state == 'collapsed' && 'rotate-180 transition-transform duration-200')} />
            <span>Collapsed View</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
