export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('fruit').del()

  // Inserts seed entries
  await knex('fruit').insert([
    { id: 1, name: 'entry 1', owner: 'Bob' },
    { id: 2, name: 'entry 2', owner: 'Alice' },
    { id: 3, name: 'entry 3', owner: 'Charlie' },
  ])
}
