import React from 'react'
import { Alert } from 'react-native'
import { Button, Container, ImgLogo, Input, Title } from '../components'

function Login() {

  return (
    <Container centerScreen>
      <ImgLogo />
      <Title text='Acesse sua conta' />
      <Input label='Login' placeholder='login' />
      <Input placeholder='Senha' secureTextEntry />
      <Button text='Entrar' onPress={function () { Alert.alert('bem vindo') }} />
    </Container>
  )
}

export default Login