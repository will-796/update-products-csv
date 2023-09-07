import express, { Request, Response } from 'express'
import { csvUpload } from './middlewares/multer'
import { errorHandler } from './middlewares/errorHandler'
import { NotFoundError } from './errors/notFoundError'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('servidor rodando')
})

app.post('/validate', csvUpload, (req: Request, res: Response) => {
  const csv = req.file?.buffer.toString()
  if (!csv) {
    throw new NotFoundError('Arquivo CSV não foi fornecido.')
  }

  res.end()
})

app.use(errorHandler)

export default app
