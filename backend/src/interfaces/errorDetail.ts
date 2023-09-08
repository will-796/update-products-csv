export interface IProductReturn {
  code: string
  name: string
  oldPrice: number
  newPrice: number
  errors: string[]
}

export interface IError{
  code: string
  message: string
}

export interface IErrorDetail {
  errors: IError[]
  products: IProductReturn[]
}
