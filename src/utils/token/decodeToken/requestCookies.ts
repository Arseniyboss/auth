import { NextRequest } from 'next/server'
import { verifyToken } from '@utils/token/verifyToken'

export const decodeToken = async (request: NextRequest) => {
  const token = request.cookies.get('token')?.value
  const payload = await verifyToken(token)
  return payload
}
