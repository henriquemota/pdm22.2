import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title='Vai para about' onPress={function () {
        navigation.navigate('About')
      }} />
      <Button title='Vai para new' onPress={function () {
        navigation.navigate('New')
      }} />
    </SafeAreaView>
  )
}

export default Home