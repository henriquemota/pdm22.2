import React from 'react'
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import Logo from '../assets/logo.png'
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
          />
          <Pressable
            style={[styles.button]}
          >
            <Text
              style={[styles.buttonText]}
            >
              Entrar
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Login