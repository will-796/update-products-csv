import { CustomError } from './customError'

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(400, message, 'BadRequestError')
  }
}
