const Express = require('express')

const app = Express()

const { system } = require('../config')

app.listen(system.port || 3000, () => {
  console.log(`Listening on ${system.port || 3000}`)
})

module.exports = {
  app,
}
