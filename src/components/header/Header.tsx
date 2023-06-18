import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { decodeToken } from '@utils/token/decodeToken/cookies'
import { getUserInitials } from '@utils/getUserInitials'
import { HeaderContainer, NavLink } from './styles'
import Avatar from '@components/avatar/Avatar'

const Header = async () => {
  const user = await decodeToken()
  return (
    <HeaderContainer>
      <h1>
        <Link href='/'>Logo</Link>
      </h1>
      {user ? (
        <Avatar initials={getUserInitials(user.name)} />
      ) : (
        <NavLink href='/login'>
          <FaUserCircle />
        </NavLink>
      )}
    </HeaderContainer>
  )
}

export default Header
