import { BASE_URL } from '@baseUrl'

type UserCredentials = {
  email: string
  password: string
}

export const login = async (userCredentials: UserCredentials) => {
  const response = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    body: JSON.stringify(userCredentials),
  })
  return response
}
