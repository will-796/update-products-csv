import {
  Model,
  Column,
  Table,
  BelongsToMany,
  PrimaryKey,
} from 'sequelize-typescript'
import PackProduct from './PackProduct'
import Product from './Product'

@Table({ tableName: 'packs', timestamps: false })
class Pack extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  pack_id!: number

  @Column({ allowNull: false })
  name!: string

  @BelongsToMany(() => Product, () => PackProduct)
  products!: Product[]
}

export default Pack
