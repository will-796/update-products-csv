import { Router } from 'express'

import validateRoute from './validateRoute'
import updateRoute from './updateRoute'
import { errorHandler } from '../middlewares/errorHandler'

const router = Router()

router.use(validateRoute)
router.use(updateRoute)


router.use(errorHandler)

export default router
