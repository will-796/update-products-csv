import express, { Request, Response } from 'express'
import { errorHandler } from './middlewares/errorHandler'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('servidor rodando')
})

app.use(router)

app.use(errorHandler)

export default app
