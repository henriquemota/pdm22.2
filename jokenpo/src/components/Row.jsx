import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

function Row(props) {
  return (
    <View style={[styles.row]}>
      {props.children}
    </View>
  )
}

export default Row