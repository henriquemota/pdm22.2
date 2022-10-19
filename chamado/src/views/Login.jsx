import React from 'react'
import { Button, Container, ImgLogo, Input, Title } from '../components'
import useAuth from '../hooks/auth'

function Login() {
  const { doLogin } = useAuth()

  return (
    <Container centerScreen>
      <ImgLogo />
      <Title text='Acesse sua conta' />
      <Input label='Login' placeholder='login' />
      <Input placeholder='Senha' secureTextEntry />
      <Button text='Entrar' onPress={() => doLogin({ login: 'admin', senha: 'admin' })} />
    </Container>
  )
}

export default Login