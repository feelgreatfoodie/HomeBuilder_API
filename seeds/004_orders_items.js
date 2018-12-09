
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders_items').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('orders_items').insert([
        { order_id: 100301,
          item_id: 100201
        },
        { order_id: 100301,
          item_id: 100202
        },
        { order_id: 100301,
          item_id: 100203
        },
        { order_id: 100302,
          item_id: 100201
        },
        { order_id: 100302,
          item_id: 100202
        },
        { order_id: 100303,
          item_id: 100203
        },
      ])
    ])
  )
}
