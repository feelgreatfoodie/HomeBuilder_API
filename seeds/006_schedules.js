
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('schedules').insert([
        { id: 100601,
          created_by: 100101
        },
        { id: 100602,
          created_by: 100102
        },
        { id: 100603,
          created_by: 100103
        }
      ])
      .then(() => knex.raw(`SELECT setval('schedules_id_seq', (SELECT MAX(id) FROM schedules));`))
    ])
  )
}
