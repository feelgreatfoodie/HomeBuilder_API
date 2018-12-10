
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages_comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('messages_comments').insert([
        { message_id: 100801,
          comment_id: 100610
        },
        { message_id: 100802,
          comment_id: 100611
        },
        { message_id: 100803,
          comment_id: 100612
        }
      ])
    ])
  )
}
