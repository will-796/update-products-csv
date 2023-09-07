import { BadRequestError } from '../errors/badRequest'
import { ICsvRow } from '../interfaces/csvRow'
import { parse } from 'csv-parse/sync'
import { IErrorDetail } from '../interfaces/errorDetail'
import Product from '../database/models/Product'
import Pack from '../database/models/Pack'
import {
  PackValidationService,
  ProductValidationService,
} from './strategies/strategy'
import { PackRepository, ProductRepository } from '../database/models'
import PackProduct from '../database/models/PackProduct'

export class CsvValidateService {
  private packValidationService: PackValidationService
  private productValidationService: ProductValidationService
  constructor() {
    this.packValidationService = new PackValidationService()
    this.productValidationService = new ProductValidationService()
  }

  private parseCsv(csvBuffer: Buffer): ICsvRow[] {
    try {
      const csvData = parse(csvBuffer.toString(), {
        columns: true,
        skip_empty_lines: true,
      })
      return csvData
    } catch (error: any) {
      throw new BadRequestError(error.message)
    }
  }

  async validate(csvBuffer: Buffer) {
    const errors: IErrorDetail[] = []
    const csvData = this.parseCsv(csvBuffer)

    for (const row of csvData) {
      const { product_code: productCode, new_price: newPrice } = row
      // validações gerais
      if (!productCode) {
        errors.push({
          code: productCode,
          message: 'Código do produto não pode ser vazio.',
        })
      }

      const newPriceNumber = Number(newPrice)
      if (Number.isNaN(newPriceNumber) || newPriceNumber <= 0) {
        errors.push({
          code: productCode,
          message: 'Preço do produto deve ser um número maior que zero.',
        })
      }

      const product = await ProductRepository.findByPk(productCode)
      const pack = await PackRepository.findByPk(productCode, {
        include: [
          {
            model: Product,
            through: {
              attributes: ['qty'],
            },
          },
        ],
      })

      // validações específicas
      if (product) {
        // validações do produto
        const errorsProduct = this.productValidationService.validate(
          { product_code: productCode, new_price: newPriceNumber },
          product,
        )
        errors.push(...errorsProduct)
      } else if (pack) {
        // validações do pacote
        const errorsPack = this.packValidationService.validate(
          { product_code: productCode, new_price: newPriceNumber },
          pack,
          csvData,
        )
        errors.push(...errorsPack)
      } else {
        errors.push({
          code: productCode,
          message: 'Produto/pacote não encontrados.',
        })
      }
    }

    return errors
  }
}
