import { Request, Response } from 'express'
import superagent from 'superagent'
import 'dotenv/config'

const today = new Date()
const year = today.getFullYear()
const month = String(today.getMonth() + 1).padStart(2, '0')
const day = String(today.getDate()).padStart(2, '0')
const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`

export const getOnThisDay = async (req: Request, res: Response) => {
  try {
    const accessToken = process.env.ACCESS_TOKEN
    if (!accessToken) {
      throw new Error('ACCESS_TOKEN is not set')
    }

    const response = await superagent
      .get(url)
      .set('Authorization', `Bearer ${accessToken}`)
      .set('Api-User-Agent', 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)')

    const data = response.body
    res.json(data)
  } catch (error) {
    console.error('Error fetching featured article:', error)
    res.status(500).send('Error fetching featured article')
  }
}
