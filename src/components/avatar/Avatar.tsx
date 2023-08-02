'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@api/users/logout'
import { AvatarContainer, UserInitials, Dropdown, DropdownText } from './styles'
import Link from 'next/link'

type Props = {
  initials: string
}

const Avatar = ({ initials }: Props) => {
  const [dropdown, setDropdown] = useState(false)
  const router = useRouter()

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleLogout = async () => {
    await logout()
    router.push('/login')
    router.refresh()
  }
  return (
    <AvatarContainer>
      <UserInitials onClick={toggleDropdown}>{initials}</UserInitials>
      {dropdown && (
        <Dropdown onClick={toggleDropdown}>
          <Link href='/profile'>
            <DropdownText>Profile</DropdownText>
          </Link>
          <DropdownText onClick={handleLogout}>Logout</DropdownText>
        </Dropdown>
      )}
    </AvatarContainer>
  )
}

export default Avatar
