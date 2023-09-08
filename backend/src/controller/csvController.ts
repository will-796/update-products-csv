import { BadRequestError } from '../errors/badRequest'
import { Request, Response } from 'express'
import { CsvValidateService } from '../service/csvValidateService'
import { CsvUpdateService } from '../service/csvUpdateService'

export class CsvController {
  private csvValidateService: CsvValidateService
  private csvUpdateService: CsvUpdateService
  constructor() {
    this.csvValidateService = new CsvValidateService()
    this.csvUpdateService = new CsvUpdateService()
  }

  validateCsv = async (req: Request, res: Response) => {
    console.log(req.file?.buffer);
    
    if (!req.file) {
      throw new BadRequestError('Arquivo CSV não foi fornecido.')
    }

    if (!req.file.mimetype.includes('csv')) {
      throw new BadRequestError('Arquivo fornecido não é um CSV.')
    }
    const errors = await this.csvValidateService.validate(req.file.buffer)

    if (errors.errors.length === 0 && errors.products.some(product => product.errors.length > 0)) {
      return res.status(200).json({ valid: true, products:[]})
    } else {
      return res.status(200).json({ valid: false, ...errors })
    }
  }

  updateCsv = async (req: Request, res: Response) => {
    if (!req.file) {
      throw new BadRequestError('Arquivo CSV não foi fornecido.')
    }

    if (!req.file.mimetype.includes('csv')) {
      throw new BadRequestError('Arquivo fornecido não é um CSV.')
    }
    await this.csvUpdateService.update(req.file.buffer)

    return res.status(200).end()
  }
}
