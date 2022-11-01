import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import CEP from './src/pages/CEP'
import Home from './src/pages/Home'
import { Post, PostList } from './src/pages/Post'
import { TodoForm, TodoList } from './src/pages/Todo'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CEP" component={CEP} />
        <Stack.Screen name="Posts" component={PostList} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Todos" component={TodoList} />
        <Stack.Screen name="Todo" component={TodoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App