import { parse } from 'csv-parse/sync'
import { BadRequestError } from '../errors/badRequest'
import { ICsvRow } from '../interfaces/csvRow'
import { ProductRepository } from '../database/models'

export class CsvUpdateService {
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

  async update(buffer: Buffer) {
    const csvData = this.parseCsv(buffer)

    for (const row of csvData) {
      const { product_code: productCode, new_price: newPrice } = row
      // atualiza o preço do produto
      await ProductRepository.update(
        { price: Number(newPrice) },
        { where: { code: productCode } },
      )
    }
  }
}
