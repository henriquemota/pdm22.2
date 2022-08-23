import { Alert, Button, Text, View } from 'react-native'
import { data } from './data'

export default function App() {

  function handleNumber() {
    const num = Math.floor(Math.random() * 100)
    Alert.alert('Sorteio', `O número da sorte é ${num}`)
  }
  function handleText() {
    const indice = Math.floor(Math.random() * data.length)
    const texto = data[indice]
    Alert.alert('Frase do dia', texto)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      >
        Clique para sortear um número entre 0 e 100
      </Text>
      <Button
        title='Clique para sortear um número'
        onPress={handleNumber}
      />
      <Button
        title='Clique para sortear uma frase'
        onPress={handleText}
      />
    </View>
  )
}

