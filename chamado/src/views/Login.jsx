import React from 'react'
import { Alert, Image, Text, View } from 'react-native'
import Logo from '../assets/logo.png'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
import styles from '../styles'

function Login() {

  return (
    <Container centerScreen>
      <Image style={[styles.logo]} source={Logo} />
      <Text style={[styles.title]} >
        Acesse sua conta
      </Text>
      <View>
        <Input label='Login' placeholder='login' />
        <Input placeholder='Senha' secureTextEntry />
        <Button text='Entrar' onPress={function () { Alert.alert('bem vindo') }} />
      </View>
    </Container>
  )
}

export default Login