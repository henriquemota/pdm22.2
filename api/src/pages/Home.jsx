import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

function Home() {
  const navigation = useNavigation()

  return (
    <View style={{ padding: 16 }}>
      <Button
        mode='contained'
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate('CEP')}
      >
        CEP
      </Button>
      <Button
        mode='contained'
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate('Posts')}
      >
        Posts
      </Button>
      <Button
        mode='contained'
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate('Todos')}
      >
        Todos
      </Button>

    </View>
  )
}

export default Home