import { Model, Column, Table, ForeignKey } from 'sequelize-typescript'
import Product from './Product'
import Pack from './Pack'

@Table({ tableName: 'packs_products', timestamps: false, underscored: true })
class PackProduct extends Model {
  @ForeignKey(() => Product)
  @Column({ primaryKey: true, allowNull: false })
  productId!: number

  @ForeignKey(() => Pack)
  @Column({ primaryKey: true, allowNull: false })
  packId!: number

  @Column
  qty!: number
}

export default PackProduct
