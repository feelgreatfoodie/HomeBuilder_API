
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders_comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('orders_comments').insert([
        { order_id: 100301,
          comment_id: 100601
        },
        { order_id: 100302,
          comment_id: 100603
        },
        { order_id: 100302,
          comment_id: 100601
        }
      ])
    ])
  )
}
