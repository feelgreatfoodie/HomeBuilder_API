
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('comments').insert([
        { id: 100601,
          body: 'Hola, Meester Superman es no home!',
          created_by: 100101
        },
        { id: 100602,
          body: 'Buenos días, me llamo Geronimo.',
          created_by: 100102
        },
        { id: 100603,
          body: 'This is a very SERIOUS comment.',
          created_by: 100103
        },
        { id: 100604,
          body: 'This is first comment for schedules.',
          created_by: 100103
        },
        { id: 100605,
          body: 'This is second comment for schedules.',
          created_by: 100103
        },
        { id: 100606,
          body: 'This is third comment for schedules.',
          created_by: 100103
        },
        { id: 100607,
          body: 'This is first comment for reports.',
          created_by: 100103
        },
        { id: 100608,
          body: 'This is second comment for reports.',
          created_by: 100103
        },
        { id: 100609,
          body: 'This is third comment for reports.',
          created_by: 100103
        },
        { id: 100610,
          body: 'This is first comment for messages.',
          created_by: 100103
        },
        { id: 100611,
          body: 'This is second comment for messages.',
          created_by: 100103
        },
        { id: 100612,
          body: 'This is third comment for messages.',
          created_by: 100103
        }
      ])
      .then(() => knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`))
    ]))
}
