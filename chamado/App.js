import { useState } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

function App() {
  const [numero, setNumero] = useState(10)

  function incrementar() {
    setNumero(numero + 1)
  }

  return (
    <SafeAreaView>
      <Text style={{ alignSelf: 'center', fontSize: 30 }}>
        {numero}
      </Text>
      <Button title='incrementar' onPress={incrementar} />
    </SafeAreaView>
  )
}

export default App