import { notFound } from 'next/navigation'
import { getUser } from '@api/users/getUser'
import { CenterContainer } from '@styles/globals'
import { Heading } from './styles'

const Profile = async () => {
  const user = await getUser()

  if (!user) {
    return notFound()
  }

  return (
    <CenterContainer>
      <div>
        <Heading>User Profile</Heading>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </CenterContainer>
  )
}

export default Profile
