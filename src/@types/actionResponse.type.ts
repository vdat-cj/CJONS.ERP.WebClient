export type ActionSuccessWithData<T> = {
  success: true
  message: string
  data: T
}

export type ActionSuccess = {
  success: true
  message: string
}

export type ActionError = {
  success: false
  message: string
  errors?: Record<string, string[]>
}
