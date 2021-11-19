const { app } = require('./adapters/express')
const postgres = require('./adapters/postgres')

app.get('/', async (req, res, next) => {
  try {
    const { rows } = await postgres.query('SELECT NOW()')
    const now = rows[0].now.toString()
    console.log(`Database connection successful => ${now}`)

    return res.end(now)
  } catch (error) {
    console.log(error)
    res.statusCode = 500
    res.end('Unable to reach database')
  }
})
