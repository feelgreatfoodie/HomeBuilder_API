
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => Promise.all([
      // Inserts seed entries
       knex('orders').insert([
        {
          id: 100301,
          ordered_by: '100102',
          reviewed_by: '100101',
          approved: 'true',
          reviewed_at: knex.raw('now()')
        }, {
          id: 100302,
          ordered_by: '100102',
          approved: 'false',
        }, {
          id: 100303,
          ordered_by: '100102',
          approved: 'false',
        }
      ])
      .then(() => knex.raw(`SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));`))
    ])
  )
}
