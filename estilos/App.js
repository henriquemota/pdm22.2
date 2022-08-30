import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

const STYLES = StyleSheet.create({
  quadrado01: {
    width: 50,
    height: 50
  },
  quadrado02: {
    width: 100,
    height: 100
  },
  quadrado03: {
    width: 150,
    height: 150
  },
  bgVermelho: {
    backgroundColor: 'red'
  },
  bgVerde: {
    backgroundColor: 'green'
  },
  bgAzul: {
    backgroundColor: 'blue'
  },
  round: {
    borderRadius: 150,
    borderWidth: 4,
    borderColor: 'blue'
  }
})

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor:
          'rgba(200,0,200,0.6)',
        justifyContent: 'center',
      }}
    >
      <View style={[STYLES.quadrado01, STYLES.bgVermelho]} />
      <View style={[STYLES.quadrado01, STYLES.bgVerde]} />
      <View style={[STYLES.quadrado01, STYLES.bgAzul]} />
      <Image
        source={{ uri: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg' }}
        style={[STYLES.quadrado03, STYLES.bgAzul, STYLES.round]}
      />
    </SafeAreaView>
  )
}
