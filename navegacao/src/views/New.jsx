import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

function New() {
  const nav = useNavigation()
  return (
    <SafeAreaView>
      <Text>New</Text>
      <Button title='Início' onPress={function () {
      }} />
    </SafeAreaView>
  )
}

export default New