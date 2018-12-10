
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('shifts').insert([
        { id: 101401,
          location_id: 100501
        },
        { id: 101402,
          location_id: 100502
        },
        { id: 101403,
          location_id: 100503
        }
      ])
      .then(() => knex.raw(`SELECT setval('shifts_id_seq', (SELECT MAX(id) FROM shifts));`))
    ])
  )
}
