
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules_shifts').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('schedules_shifts').insert([
        { schedule_id: 100601,
          shift_id: 101001
        },
        { schedule_id: 100602,
          shift_id: 101002
        },
        { schedule_id: 100603,
          shift_id: 101003
        }
      ])
    ])
  )
}
