
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('schedules').insert([
        { id: 101001,
          created_by: 100101
        },
        { id: 101002,
          created_by: 100102
        },
        { id: 101003,
          created_by: 100103
        }
      ])
      .then(() => knex.raw(`SELECT setval('schedules_id_seq', (SELECT MAX(id) FROM schedules));`))
    ])
  )
}
