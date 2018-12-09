
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(() => {
      return Promise.all([
      // Inserts seed entries
        knex('items').insert([
          { id: 1,
            eng_name: 'round shovel',
            esp_name: 'pala redonda',
            category: 'tool',
            sub_category: 'excavation',
            sold_by: 'item'
          },
          { id: 2,
            eng_name: 'jumping jack',
            esp_name: 'compactadora',
            category: 'tool',
            sub_category: 'backfill',
            sold_by: 'item'
          },
          { id: 3,
            eng_name: 'broom',
            esp_name: 'escoba',
            category: 'tool',
            sub_category: 'excavation',
            sold_by: 'item'
          }
        ])
      ])
    })
}
