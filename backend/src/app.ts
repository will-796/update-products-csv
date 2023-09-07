import express, { Request, Response } from 'express'
import { errorHandler } from './middlewares/errorHandler'
import router from './routes'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('servidor rodando')
})

app.use(router)

app.use(errorHandler)

export default app
