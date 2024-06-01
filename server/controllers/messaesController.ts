import { Request, Response } from 'express'

export async function getMessage(req: Request, res: Response) {
  try {
    const message = 'Hello from the server!'
    res.json({ message })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}
