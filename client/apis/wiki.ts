import request from 'superagent'
import { OnThisDayResponse } from '../../models/wiki'

export async function getOnThisDay(): Promise<OnThisDayResponse> {
  try {
    const response = await request.get('/api/v1/onthisday')
    return response.body as OnThisDayResponse
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
