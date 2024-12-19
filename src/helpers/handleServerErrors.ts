import camelcaseKeys from 'camelcase-keys'
import { UseFormSetError, FieldValues, Path } from 'react-hook-form'

export const handleServerErrors = <T extends FieldValues>(
  error: Record<string, string[]>,
  setError: UseFormSetError<T>
) => {
  const errors = camelcaseKeys(error, { deep: true })
  Object.keys(errors).forEach((fieldName) => {
    const fieldErrors = errors[fieldName]
    fieldErrors.forEach((error) => {
      setError(fieldName as Path<T>, {
        type: 'server',
        message: error
      })
    })
  })
}
