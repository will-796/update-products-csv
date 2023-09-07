import sequelize from '../database/config/connection'

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Conexão estabelecida com sucesso.')
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error)
  }
}

testConnection()
