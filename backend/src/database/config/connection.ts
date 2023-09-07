import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import Product from '../models/Product'
import PackProduct from '../models/PackProduct'
import Pack from '../models/Pack'

dotenv.config()

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT ?? '3306'),
  models: [Product, Pack, PackProduct],
})

export default sequelize
