import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from '../styles'

function LargeButton(props) {

  return (
    <Pressable style={[styles.buttonSobre]} onPress={props.onPress} >
      <Text>{props.text}</Text>
    </Pressable>

  )
}

export default LargeButton