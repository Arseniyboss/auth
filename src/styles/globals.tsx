'use client'

import styled from 'styled-components'

export const CenterContainer = styled.main`
  min-height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
`

export const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 2rem;
  letter-spacing: 1px;
  background: var(--secondary-color);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: hsl(193, 82%, 25%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`

export const ErrorMessage = styled.p`
  background: #f8d7da;
  color: #721c24;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.25rem;
`
