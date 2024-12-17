import { cn } from '@/lib/utils'

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const baseStyles = 'font-bold text-gray-800'

const sizeStyles = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base'
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={cn(baseStyles, sizeStyles[level], className)}>{children}</Tag>
}

export default Heading
