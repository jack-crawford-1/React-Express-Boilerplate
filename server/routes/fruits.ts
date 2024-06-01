import { Router } from 'express'

import {
  addFruitById,
  deleteFruitById,
  getFruitById,
  getFruits,
  updateFruitById,
} from '../controllers/fruitsController'

const router = Router()

router.get('/', getFruits)
router.get('/:id', getFruitById)
router.post('/', addFruitById)
router.delete('/:id', deleteFruitById)
router.patch('/:id', updateFruitById)

export default router
