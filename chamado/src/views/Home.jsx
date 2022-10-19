import React from 'react'
import { Button, Text } from 'react-native'
import { Container } from '../components'
import useAuth from '../hooks/auth'

function Home() {

  const { doLogout } = useAuth()

  return (
    <Container>
      <Text>Home</Text>
      <Button title='Sair' onPress={doLogout} />
    </Container>
  )
}

export default Home