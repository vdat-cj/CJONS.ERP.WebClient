import { Bell } from 'lucide-react'

const Notification: React.FC = () => {
  return (
    <>
      <button className='hover:opacity-75'>
        <Bell size={20} />
      </button>
    </>
  )
}

export default Notification
