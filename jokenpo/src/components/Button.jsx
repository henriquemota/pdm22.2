import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from '../styles'

function Button(props) {
  return (
    <Pressable style={[styles.buttonPlayer]} onPress={props.onPress} >
      <Text>{props.text}</Text>
    </Pressable>
  )
}

export default Button