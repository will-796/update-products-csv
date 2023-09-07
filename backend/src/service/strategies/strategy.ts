import { ICsvRow } from '../../interfaces/csvRow'
import { IErrorDetail } from '../../interfaces/errorDetail'
import Product from '../../database/models/Product'
import Pack from '../../database/models/Pack'

export abstract class Strategy {
  abstract validate(
    row: ICsvRow,
    product?: Product | Pack,
    csv?: ICsvRow[],
  ): IErrorDetail[]
}

export class ProductValidationService implements Strategy {
  validate(row: ICsvRow, product: Product): IErrorDetail[] {
    const errors: IErrorDetail[] = []

    if (row.new_price < product.cost_price) {
      errors.push({
        code: row.product_code,
        message: 'Preço do produto não pode ser menor que o custo.',
      })
    }

    if (row.new_price > product.cost_price * 1.1) {
      errors.push({
        code: row.product_code,
        message: 'Preço do produto não pode ser maior que 10% do custo.',
      })
    }

    return errors
  }
}

export class PackValidationService implements Strategy {
  validate(row: ICsvRow, pack: Pack, csv: ICsvRow[]): IErrorDetail[] {
    const errors: IErrorDetail[] = []
    // verifica se algum produto do pacote está no array do csv
    const productsCsvInPack = csv.filter((row) => {
      return pack.products.some((product) => {
        return product.code === Number(row.product_code)
      })
    })

    if (productsCsvInPack.length !== pack.products.length) {
      errors.push({
        code: row.product_code,
        message: 'Produto não encontrado no pacote.',
      })
      return errors
    }
    // somar o preço dos produtos do pacote com os do csv
    const packSum = productsCsvInPack.reduce((acc, row) => {
      return acc + row.new_price
    }, 0)

    if (row.new_price !== packSum) {
      errors.push({
        code: row.product_code,
        message: 'Preço do pacote deve ser igual que a soma dos produtos.',
      })
    }

    return errors
  }
}
