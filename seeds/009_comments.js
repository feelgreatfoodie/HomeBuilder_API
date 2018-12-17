
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('comments').insert([
        { id: 100901,
          body: 'Hola, Meester Superman es no home!',
          created_by: 100101,
          order_id: 100301
        },
        { id: 100902,
          body: 'Buenos días, me llamo Geronimo.',
          created_by: 100102,
          order_id: 100302
        },
        { id: 100903,
          body: 'This is a very SERIOUS comment.',
          created_by: 100103,
          order_id: 100302
        },
        { id: 100904,
          body: 'This is first comment for schedules.',
          created_by: 100101,
          schedule_id: 100601
        },
        { id: 100905,
          body: 'This is second comment for schedules.',
          created_by: 100102,
          schedule_id: 100602
        },
        { id: 100906,
          body: 'This is third comment for schedules.',
          created_by: 100103,
          schedule_id: 100603
        },
        { id: 100907,
          body: 'This is first comment for reports.',
          created_by: 100101,
          report_id: 100801
        },
        { id: 100908,
          body: 'This is second comment for reports.',
          created_by: 100102,
          report_id: 100802
        },
        { id: 100909,
          body: 'This is third comment for reports.',
          created_by: 100103,
          report_id: 100803
        },
        { id: 100910,
          body: 'This is first comment for messages.',
          created_by: 100101,
          message_id: 100701
        },
        { id: 100911,
          body: 'This is second comment for messages.',
          created_by: 100102,
          message_id: 100702
        },
        { id: 100912,
          body: 'This is third comment for messages.',
          created_by: 100103,
          message_id: 100703
        }
      ])
      .then(() => knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`))
    ]))
}
