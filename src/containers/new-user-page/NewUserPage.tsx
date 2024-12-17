import UserForm from '@/components/forms/user-form'

const roles = [
  {
    id: 1,
    name: 'Admin'
  },
  {
    id: 2,
    name: 'HR'
  }
]

const NewUserPage = () => {
  return <UserForm roles={roles} />
}

export default NewUserPage
