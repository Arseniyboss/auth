import { verifyToken } from '@utils/token/verifyToken'
import { getToken } from '@utils/token/getToken'

export const decodeToken = async () => {
  const token = getToken()
  const payload = await verifyToken(token)
  return payload
}
