import {
  Model,
  Column,
  Table,
  BelongsToMany,
  PrimaryKey,
} from 'sequelize-typescript'
import Pack from './Pack'
import PackProduct from './PackProduct'

@Table({ tableName: 'products', timestamps: false })
class Product extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  code!: number

  @Column({ allowNull: false })
  name!: string

  @Column({ allowNull: false })
  cost_price!: number

  @Column({ allowNull: false })
  sales_price!: number

  @BelongsToMany(() => Pack, () => PackProduct)
  packs!: Pack[]
}

export default Product
