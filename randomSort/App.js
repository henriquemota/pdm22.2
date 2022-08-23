import { Alert, Button, Text, View } from 'react-native'

export default function App() {

  function handleButton() {
    const num = Math.floor(Math.random() * 100)
    Alert.alert('Sorteio', `O número da sorte é ${num}`)
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
        title='Clique para sortear'
        onPress={handleButton}
      />
    </View>
  )
}

