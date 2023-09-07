import { Router } from 'express'
import { csvUpload } from '../middlewares/multer'
import { CsvController } from '../controller/csvController'

const router = Router()

const csvController = new CsvController()

router.post('/update', csvUpload, csvController.updateCsv)

export default router
