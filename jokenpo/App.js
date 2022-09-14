import { Alert, Dimensions, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
  },
  buttonPlayer: {
    padding: 16,
    width: (width - 64) / 3,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    fontSize: 64,
    fontWeight: '800',
    marginVertical: 32,
  },
  buttonSobre: {
    padding: 16,
    width: (width - 16),
    backgroundColor: 'rgba(0,0,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
})

function play(opcao) {
  const jogadas = ['pedra', 'papel', 'tesoura']
  const indice = Math.floor(Math.random() * jogadas.length)
  const computador = jogadas[indice]
  let resultado = ''

  if (opcao === computador) resultado = 'empate'
  else if (
    (opcao === 'pedra' && computador !== 'papel') ||
    (opcao === 'papel' && computador !== 'tesoura') ||
    (opcao === 'tesoura' && computador !== 'pedra')
  )
    resultado = 'você venceu'
  else resultado = 'app venceu'

  Alert.alert('Resultado', `A sua jogada foi ${opcao} e a do computador foi ${computador} e o resultado foi ${resultado}`)
}

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.title]}>Jokenpo</Text>
      <View style={[styles.row]}>
        <Pressable
          style={[styles.buttonPlayer]}
          onPress={() => play('pedra')}
        >
          <Text>Pedra</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonPlayer]}
          onPress={() => play('papel')}
        >
          <Text>Papel</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonPlayer]}
          onPress={() => play('tesoura')}
        >
          <Text>Tesoura</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.buttonSobre]}
        onPress={() => Alert.alert('Sobre', 'App desenvolvido na disciplina de dispositivos móveis da Estácio')}
      >
        <Text>Sobre</Text>
      </Pressable>
    </SafeAreaView>
  )
}
