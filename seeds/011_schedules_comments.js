
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules_comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('schedules_comments').insert([
        { schedule_id: 101001,
          comment_id: 100604
        },
        { schedule_id: 101002,
          comment_id: 100605
        },
        { schedule_id: 101003,
          comment_id: 100606
        }
      ])
    ])
  )
}
