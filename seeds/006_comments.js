
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('comments').insert([
        { id: 100601,
          body: 'Hola, Meester Superman es no home!',
          user: 100101
        },
        { id: 100602,
          body: 'Buenos días, me llamo Geronimo.',
          user: 100102
        },
        { id: 100603,
          body: 'This is a very SERIOUS comment.',
          user: 100103
        },
      ])
    ]))
}
