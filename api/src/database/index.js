import * as SQLite from 'expo-sqlite'

function useDatabase() {
  const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("database.db"),
  }

  function initDb() {
    const sql = [
      `DROP TABLE IF EXISTS todos;`,
      `CREATE TABLE IF NOT EXISTS todos (
        id integer primary key autoincrement,
        conteudo text
        );`,

      `insert into todos (conteudo) values ('tarefa 1');`,
      `insert into todos (conteudo) values ('tarefa 2');`,
    ]

    const db = DatabaseConnection.getConnection()

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i])
          tx.executeSql(sql[i])
        }
      }, (error) => {
        console.log(error)
      }, () => {
        console.log("transaction complete call back ")
      }
    )
  }
  function insert(tarefa) {
    // const db = SQLite.openDatabase("database.db")
    const db = DatabaseConnection.getConnection()
    db.exec(
      [{ sql: 'insert into todos (nome) values (?);', args: [tarefa] }],
      false,
      () => console.log('Linhas inseridas')
    )
  }
  function select() {
    const db = DatabaseConnection.getConnection()
    db.exec(
      [{ sql: 'select * from todos;', args: [] }],
      true,
      (e) => {
        console.log('select funcionou')
        console.log(e)
      }
    )
  }

  return {
    initDb,
    insert,
    select,
  }
}

export default useDatabase
