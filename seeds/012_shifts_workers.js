
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts_workers').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('shifts_workers').insert([
        { shift_id: 101001,
          worker_id: 100101
        },
        { shift_id: 101002,
          worker_id: 100102
        },
        { shift_id: 101003,
          worker_id: 100103
        }
      ])
    ])
  )
}
