'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@api/users/login'
import { CenterContainer, ErrorMessage } from '@styles/globals'
import {
  Form,
  FormGroup,
  FormInput,
  FormButton,
  FormFooter,
  FormLink,
} from '@styles/form'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const response = await login({ email, password })

    if (!response.ok) {
      setLoading(false)
      setError(response.statusText)
      return
    }

    router.push('/')
    router.refresh()
  }
  return (
    <CenterContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <label htmlFor='email'>Email</label>
          <FormInput
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='on'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='password'>Password</label>
          <FormInput
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='on'
          />
        </FormGroup>
        <FormButton disabled={loading}>Sign In</FormButton>
        <FormFooter>
          <p>Don't have an account?</p>
          <FormLink href='/register'>Sign Up</FormLink>
        </FormFooter>
      </Form>
    </CenterContainer>
  )
}

export default Login
