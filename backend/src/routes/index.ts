import { Router } from 'express'

import validateRoute from './validateRoute'
import updateRoute from './updateRoute'

const router = Router()

router.use(validateRoute)
router.use(updateRoute)

export default router
