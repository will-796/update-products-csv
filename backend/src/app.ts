import express, { Request, Response } from 'express'
import { csvUpload } from './middlewares/multer'
import { errorHandler } from './middlewares/errorHandler'
import { CsvController } from './controller/csvController'
import router from './routes/validateRoute'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('servidor rodando')
})

app.use(router)

// app.use(errorHandler)

export default app
