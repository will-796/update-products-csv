// sequelize-config.ts
import { Sequelize, Options } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelizeOptions: Options = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT ?? '3306'),
}

const sequelize = new Sequelize(sequelizeOptions)

export default sequelize
