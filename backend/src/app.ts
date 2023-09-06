import express, { Request, Response } from 'express'
import { csvUpload } from './middlewares/multer'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('servidor rodando')
})

app.post('/validate', csvUpload, (req: Request, res: Response) => {
  console.log(req.file?.buffer.toString())
  res.end()
})

export default app
