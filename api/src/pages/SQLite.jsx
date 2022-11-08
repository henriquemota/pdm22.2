import { View } from 'react-native'
import { Button } from 'react-native-paper'
import useDatabase from '../database'

function SQLite() {
  const { initDb, select, insert } = useDatabase()

  return (<View style={{ padding: 16 }}>
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={initDb}
    >
      Inicializar DB
    </Button>
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={select}
    >
      Selecionar registros
    </Button>
    <Button
      mode='contained'
      style={{ marginTop: 16 }}
      onPress={() => insert('nova tarefa')}
    >
      Inserir registro
    </Button>
  </View>)
}

export default SQLite