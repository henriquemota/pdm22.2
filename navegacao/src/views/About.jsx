import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

function About() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>About</Text>
      <Button title='new' onPress={function () {
        navigation.navigate('New')
      }} />
    </SafeAreaView>
  )
}

export default About