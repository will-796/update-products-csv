import sequelize from '../config/connection'
import Pack from './Pack'
import Product from './Product'

export const ProductRepository = sequelize.getRepository(Product)
export const PackRepository = sequelize.getRepository(Pack)
