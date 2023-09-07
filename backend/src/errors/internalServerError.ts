import { CustomError } from './customError'

export class InternalServerError extends CustomError {
  constructor(message: string) {
    super(500, message, 'InternalServerError')
  }
}
