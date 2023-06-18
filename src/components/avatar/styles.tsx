import styled from 'styled-components'

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const UserInitials = styled.div`
  --size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size);
  width: var(--size);
  background: #555;
  color: white;
  border-radius: 50%;
  text-transform: capitalize;
  cursor: pointer;
`

export const Dropdown = styled.div`
  position: absolute;
  background: white;
  color: hsl(193, 82%, 31%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin-top: 3rem;
  border-radius: 10px;
  overflow: hidden;
`

export const DropdownText = styled.p`
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &:hover {
    background: lightgrey;
    color: #303545;
  }
`
