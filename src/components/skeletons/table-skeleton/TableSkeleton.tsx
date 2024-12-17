import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const TableSkeleton: React.FC = () => {
  return (
    <div className='animate-pulse'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>
              <Skeleton className='h-4 w-[80px]' />
            </TableHead>
            <TableHead>
              <Skeleton className='h-4 w-[80px]' />
            </TableHead>
            <TableHead>
              <Skeleton className='h-4 w-[80px]' />
            </TableHead>
            <TableHead className='text-right'>
              <Skeleton className='h-4 w-[80px]' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className='h-4 w-[80px]' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-[80px]' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-[80px]' />
              </TableCell>
              <TableCell className='text-right'>
                <Skeleton className='h-4 w-[80px]' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableSkeleton
