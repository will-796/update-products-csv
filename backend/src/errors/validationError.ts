import { CustomError } from './customError'

export class ValidationError extends CustomError {
  constructor(message: string, details?: any) {
    super(400, message, 'ValidationError', details)
  }
}
