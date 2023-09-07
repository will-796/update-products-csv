/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/customError'
import { InternalServerError } from '../errors/internalServerError'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    const { statusCode, message, details } = err
    const errorResponse = { statusCode, message, details }
    console.log(errorResponse)

    res.status(statusCode).json(errorResponse)
  } else {
    const errorResponse = new InternalServerError('Erro interno no servidor.')
    console.log(errorResponse)
    res.status(errorResponse.statusCode).json(errorResponse)
  }
}
