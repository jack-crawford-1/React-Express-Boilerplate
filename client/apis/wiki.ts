import request from 'superagent'
import { OnThisDayModel } from '../../models/wiki'

export async function getOnThisDay(): Promise<OnThisDayModel[]> {
  try {
    const response = await request.get('/api/v1/onthisday')
    return response.body as OnThisDayModel[]
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
