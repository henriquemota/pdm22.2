import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import CEP from './src/pages/CEP'
import Home from './src/pages/Home'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CEP'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CEP" component={CEP} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App