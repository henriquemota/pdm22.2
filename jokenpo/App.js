import { useState } from 'react'
import { Text } from 'react-native'
import Button from './src/components/Button'
import Container from './src/components/Container'
import LargeButton from './src/components/LargeButton'
import Row from './src/components/Row'
import Titulo from './src/components/Titulo'

export default function App() {
  const [result, setResult] = useState('')

  function play(opcao) {
    const jogadas = ['pedra', 'papel', 'tesoura']
    const indice = Math.floor(Math.random() * jogadas.length)
    const computador = jogadas[indice]
    // let resultado = ''

    if (opcao === computador) setResult('empate')
    else if (
      (opcao === 'pedra' && computador !== 'papel') ||
      (opcao === 'papel' && computador !== 'tesoura') ||
      (opcao === 'tesoura' && computador !== 'pedra')
    )
      setResult('você venceu')
    else setResult('app venceu')
    // Alert.alert('Resultado', `A sua jogada foi ${opcao} e a do computador foi ${computador} e o resultado foi ${resultado}`)
  }

  return (
    <Container>
      <Titulo text='Qualquer coisa' />
      <Row>
        <Button text='Pedra' onPress={function () { play('pedra') }} />
        <Button text='Papel' onPress={function () { play('papel') }} />
        <Button text='Tesoura' onPress={function () { play('tesoura') }} />
      </Row>
      <Text>{result}</Text>
      <LargeButton text='Sobre' />
    </Container>
  )
}


