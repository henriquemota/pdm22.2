import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import useDatabase from '../database'

function SQLite() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const { initDb, findAll, insert } = useDatabase()

  useEffect(() => {
    search()
  }, [])

  function search() {
    findAll().then(({ _array }) => setTodos(_array))
  }

  function save() {
    insert(todo)
    setTodo('')
    search()
  }

  return (<View style={{ padding: 16 }}>
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={function () {
        initDb()
        search()
      }}
    >
      Inicializar DB
    </Button>
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={findAll}
    >
      Selecionar registros
    </Button>
    <TextInput
      placeholder='informe a atividade'
      onChangeText={text => setTodo(text)}
      value={todo}
    />
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={save}
    >
      Inserir registro
    </Button>
    <FlatList
      data={todos}
      renderItem={({ item }) => <Text style={{ margin: 16, fontSize: 32 }}>{item.conteudo}</Text>}
      keyExtractor={item => item.id}
    />

  </View>)
}

export default SQLite