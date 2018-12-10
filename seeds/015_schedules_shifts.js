
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules_shifts').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('schedules_shifts').insert([
        { schedule_id: 101001,
          shift_id: 101401
        },
        { schedule_id: 101002,
          shift_id: 101402
        },
        { schedule_id: 101003,
          shift_id: 101403
        }
      ])
    ])
  )
}
