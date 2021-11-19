const conf = require('@iteam/config')({
  file: `${process.cwd()}/config.json`,
  defaults: {
    node_env: 'local',
    postgres: {
      connectionTimeoutMillis: 5000,
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgrespassword',
      database: 'X',
      schema: 'X',
    },
    system: {
      port: 4000,
    },
  },
})

module.exports = {
  node_env: conf.get('node_env').toUpperCase(),
  postgres: conf.get('postgres'),
  system: conf.get('system'),
}