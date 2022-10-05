import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from '../styles'

function Container(props) {
  return (
    <SafeAreaView style={[styles.container]}>
      {props.children}
    </SafeAreaView>
  )
}

export default Container