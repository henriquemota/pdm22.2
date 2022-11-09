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
      [
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
        { sql: 'insert into todos (conteudo) values (?);', args: [tarefa] },
      ],
      false,
      () => console.log('Linhas inseridas')
    )
  }
  function findById(id) {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from todos where id=?`, [id], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }
  function findAll() {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from todos;`, [], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }

  return {
    initDb,
    insert,
    findById,
    findAll,
  }
}

export default useDatabase
