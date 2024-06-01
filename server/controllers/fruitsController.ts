import { Request, Response } from 'express'
import * as db from '../db/fruits.ts'

export async function getFruits(req: Request, res: Response) {
  try {
    const fruits = await db.getAllFruits()
    res.json({
      success: true,
      fruits: fruits.map((fruit) => ({
        id: fruit.id,
        name: fruit.name,
        owner: fruit.owner,
      })),
    })
  } catch (error) {
    console.error('Error fetching fruits:', error)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

export async function getFruitById(req: Request, res: Response) {
  try {
    const fruit = await db.getFruitById(req.params.id)
    res.json(fruit)
  } catch (err) {
    console.error('error fetching fruit:', err)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

export async function addFruitById(req: Request, res: Response) {
  try {
    const { owner, name } = req.body
    await db.addFruit({ owner, name })
    res.status(201).send()
  } catch (error) {
    console.error('error adding fruit:', error)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

export async function deleteFruitById(req: Request, res: Response) {
  try {
    await db.deleteFruit(Number(req.params.id))
    res.status(204).send()
  } catch (error) {
    console.error('error deleting fruit:', error)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

export async function updateFruitById(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { name } = req.body
    await db.updateFruit(Number(id), name)
    res.status(204).send()
  } catch (error) {
    console.error('error updating fruit:', error)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

// POST route with JWT authentication - using no auth above as placeholder
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
