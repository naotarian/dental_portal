import { useState } from 'react'

//components
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import styled from 'styled-components'

import SignUp from '../components/Auth/SignUp'

import { useAuth } from '@/hooks/auth'
const StyledAlert = styled(Alert)`
  width: 80%;
  margin: 1rem auto;
`

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    register({ name, email, password, password_confirmation, setErrors })
  }

  return (
    <>
      {errors &&
        Object.entries(errors).map(data => {
          let returnData = data[1].map(data2 => {
            return (
              <>
                {data2}
                <br />
              </>
            )
          })
          return (
            <>
              <StyledAlert severity="error">
                <AlertTitle>{returnData}</AlertTitle>
              </StyledAlert>
            </>
          )
        })}
      <SignUp
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordConfirmation={setPasswordConfirmation}
        submitForm={submitForm}
      />
    </>
  )
}

export default Register
