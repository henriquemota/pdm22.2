import React from 'react'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import Logo from '../assets/logo.png'
import Button from '../components/Button'
import styles from '../styles'

function Login() {

  return (
    <View
      style={[styles.container]}
    >
      <SafeAreaView
        style={[styles.centerScreen]}
      >
        <Image
          style={[styles.logo]} source={Logo}
        />
        <Text
          style={[styles.title]}
        >
          Acesse sua conta
        </Text>
        <View>
          <TextInput
            style={[styles.input]}
            placeholder='Login'
            placeholderTextColor="rgba(225,255,255,0.4)"
          />
          <TextInput
            style={[styles.input]}
            placeholder='Senha'
            placeholderTextColor="rgba(225,255,255,0.4)"
            secureTextEntry
          />
          <Button text='Entrar' color='#0000ff' />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Login