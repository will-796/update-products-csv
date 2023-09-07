export class CustomError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errorCode: string,
    public details?: any,
  ) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
