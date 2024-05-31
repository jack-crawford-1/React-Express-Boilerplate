import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/fruits.ts'
import checkJwt from '../auth0.ts'

const router = Router()

router.get('/message', async (req, res, next) => {
  try {
    const message = 'Hello from the server!'
    res.json({ message })
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const fruits = await db.getAllFruits()
    res.json({
      fruits: fruits.map((fruit) => ({
        id: fruit.id,
        name: fruit.name,
        owner: fruit.owner,
      })),
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const fruit = await db.getFruitById(req.params.id)
    res.json(fruit)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const { owner, name } = req.body
    await db.addFruit({ owner, name })
    res.status(StatusCodes.CREATED).send()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await db.deleteFruit(Number(req.params.id))
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { name } = req.body
    await db.updateFruit(Number(id), name)
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (err) {
    next(err)
  }
})

export default router

//
// POST route with JWT authentication - using no auth above as placeholder
//

// router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
//   if (!req.auth?.sub) {
//     res.sendStatus(StatusCodes.UNAUTHORIZED)
//     return
//   }

//   try {
//     const { owner, name } = req.body
//     const id = await db.addFruit({ owner, name })
//     res
//       .setHeader('Location', `${req.baseUrl}/${id}`)
//       .sendStatus(StatusCodes.CREATED)
//   } catch (err) {
//     next(err)
//   }
// })
