export type User = {
  id: number
  userName: string
  fullName: string
  email: string
  dateRegister: Date | string
  dateLastAccess: Date | string
}

export type UserInfo = {
  id: number
  userName: string
  memberName: string
  memberImage: string
  memberEmail: string
  memberPhone: string
  dateRegister: Date
  dateLastModifiedAccess: Date
  dateLastAccess: Date
}
