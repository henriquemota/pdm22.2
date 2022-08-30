import { SafeAreaView, Text, View } from 'react-native'

const STYLES = {
  view: {
    backgroundColor: '#ff0000',
  },
  fullView: {
    height: '100%'
  },
  text: {
    fontSize: 30
  }
}

export default function App() {
  return (
    <SafeAreaView>
      <View
        style={[STYLES.view, STYLES.fullView]}
      >
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  )
}
