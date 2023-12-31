import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import Header from '@components/header/Header'

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Auth',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
