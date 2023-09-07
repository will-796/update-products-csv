import { BadRequestError } from '../errors/badRequest'
import { Request, Response } from 'express'
import { CsvValidateService } from '../service/csvValidateService'

export class CsvController {
  private csvValidateService: CsvValidateService
  constructor() {
    this.csvValidateService = new CsvValidateService()
  }

  validateCsv = async (req: Request, res: Response) => {
    if (!req.file) {
      throw new BadRequestError('Arquivo CSV não foi fornecido.')
    }

    if (!req.file.mimetype.includes('csv')) {
      throw new BadRequestError('Arquivo fornecido não é um CSV.')
    }
    const errors = await this.csvValidateService.validate(req.file.buffer)

    if (errors.length === 0) {
      return res.status(200).json({ valid: true })
    } else {
      return res.status(200).json({ valid: false, errors })
    }
  }
}
