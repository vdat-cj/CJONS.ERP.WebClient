import { ScrollArea } from '@/components/ui/scroll-area'

type PageContainerProps = {
  children: React.ReactNode
  scrollable?: boolean
}

const PageContainer: React.FC<PageContainerProps> = ({ children, scrollable = true }) => {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-128px)]'>
          <main className='h-full p-4 md:px-6'>{children}</main>
        </ScrollArea>
      ) : (
        <main className='h-full p-4 md:px-6'>{children}</main>
      )}
    </>
  )
}

export default PageContainer
