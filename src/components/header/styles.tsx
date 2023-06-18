'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  box-shadow: 0 0 0.25rem darkgrey;
  color: var(--primary-color);
`

export const NavLink = styled(Link)`
  display: flex;
  font-size: 1.8rem;
`
