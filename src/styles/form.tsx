import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@styles/globals'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 340px;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 0.25rem darkgrey;
  color: var(--primary-color);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const FormInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  outline: none;
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;

  &:focus {
    border: 1px solid #444;
  }
`

export const FormButton = styled(Button)`
  align-self: flex-start;
`

export const FormFooter = styled.div`
  display: flex;
  gap: 1rem;
`

export const FormLink = styled(Link)`
  color: var(--secondary-color);
`
