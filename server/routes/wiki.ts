import { Router } from 'express'
import { getOnThisDay } from '../controllers/wikiController'

const router = Router()

router.get('/', getOnThisDay)

export default router
