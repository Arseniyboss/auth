import { BASE_URL } from '@baseUrl'
import { getToken } from '@utils/token/getToken'

type User = {
  name: string
  email: string
}

export const getUser = async () => {
  const token = getToken()

  const response = await fetch(`${BASE_URL}/api/users/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) return

  const user: User = await response.json()
  return user
}
