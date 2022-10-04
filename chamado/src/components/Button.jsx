import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from '../styles'

function Button(props) {
  return (
    <Pressable style={[styles.button, props.color && { backgroundColor: props.color }]} >
      <Text style={[styles.buttonText]} >
        {props.text}
      </Text>
    </Pressable>
  )
}

export default Button