import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/views/Home'
import Login from './src/views/Login'

const Stack = createNativeStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#202024', }
      }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App