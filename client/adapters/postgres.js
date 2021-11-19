const { Client } = require('pg')
const config = require('../config').postgres

const wait = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms))

async function connect(attemptNo = 0) {
  try {
    const client = new Client(config)
    await client.connect()
    return client
  } catch (err) {
    console.warn(err)

    if (attemptNo >= 2) {
      throw err
    }

    const delay = Math.min(1000 * attemptNo, 7000)
    await wait(delay)
    return connect(++attemptNo)
  }
}

async function client() {
  const client = await connect()
  return client
}

async function query(sql, params = []) {
  // when using `sql-template-strings`
  if (typeof sql !== 'string') {
    params = sql.values
    sql = sql.text
  }

  const conn = await connect()

  try {
    const result = await conn.query(sql, params)
    return result
  } finally {
    await conn.end()
  }
}

module.exports = { client, query }