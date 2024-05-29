import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits(): Promise<
  {
    owner: string
    id: string
    name: string
  }[]
> {
  return request.get(rootUrl + '/fruits').then((res) => res.body.fruits)
}

export function addFruit(
  fruit: string | object | undefined,
): Promise<{ id: string; name: string }> {
  return request
    .post(rootUrl + '/fruits')
    .send(fruit)
    .then((res) => res.body)
}

export function deleteFruit(id: string) {
  return request.delete(`${rootUrl}/fruits/${id}`)
}

export async function updateFruit(id: number, name: string) {
  return request
    .patch(`${rootUrl}/fruits/${id}`)
    .send({ name })
    .then((res) => res.body)
}
