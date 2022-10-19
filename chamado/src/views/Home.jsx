import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import useAuth from '../hooks/auth'

function Home() {

  const { doLogout } = useAuth()

  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>Home</Text>
          <Button title='Sair' onPress={doLogout} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home