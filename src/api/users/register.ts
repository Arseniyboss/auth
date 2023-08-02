import { BASE_URL } from '@baseUrl'

type User = {
  name: string
  email: string
  password: string
}

export const register = async (user: User) => {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  })
  return response
}
