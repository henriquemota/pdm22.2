import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper'
import { TODO_BASE_URL } from '../constants'

function TodoList() {
  const navigation = useNavigation()

  return (
    <View style={{ padding: 16 }}>
      <Button mode='contained' onPress={() => navigation.navigate('Todo')}>Novo item</Button>
      <FlatList

      />
    </View>
  )
}

function TodoForm() {
  const navigation = useNavigation()
  const [todo, setTodo] = useState({ finalizado: false, conteudo: '' })

  function save() {
    axios
      .post(`${TODO_BASE_URL}/todo.json`, todo)
      .then((res) => {
        Alert.alert('Atenção', 'Tarefa registrada com sucesso.')
        navigation.goBack()
      })
      .catch((err) => Alert.alert('Atenção', 'Erro ao gravar a tarefa.'))
  }

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title='Informe a tarefa' />
        <Card.Content>
          <TextInput
            multiline numberOfLines={10}
            onChangeText={(text) => setTodo({ ...todo, conteudo: text })}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode='contained' onPress={save}>Gravar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export { TodoList, TodoForm }
