import { Router } from 'express'
import { getMessage } from '../controllers/messaesController'

const router = Router()

router.get('/', getMessage)

export default router
