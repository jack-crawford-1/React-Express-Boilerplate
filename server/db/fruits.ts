import db from './connection.ts'
import { Fruit, FruitData } from '../../models/fruit.ts'

export async function getAllFruits() {
  const fruit = await db('fruit').select()
  return fruit as Fruit[]
}

export async function getFruitById(id: number | string) {
  const fruit = await db('fruit').select().first().where({ id })
  return fruit as Fruit
}

export async function addFruit(data: FruitData) {
  const [id] = await db('fruit').insert(data)
  return id
}

export async function deleteFruit(id: number) {
  const fruit = await db('fruit').where({ id }).delete()
  return fruit
}

export async function updateFruit(id: number, name: string) {
  const fruit = await db('fruit').where({ id }).update({ name })
  return fruit
}
