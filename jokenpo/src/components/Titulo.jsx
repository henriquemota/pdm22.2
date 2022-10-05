import { Text } from 'react-native'
import styles from '../styles'


function Titulo(props) {

  return (
    <Text
      style={[styles.title, { color: props.color || 'black' }]}
    >
      {props.text}
    </Text>
  )
}

export default Titulo