
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(() => Promise.all([
        // Inserts seed entries
        knex('reports').insert([
          {
            id: 100901,
            created_by: 100102,
            location: 100501,
            date: 'December 1, 2018',
            challenges: 'cement is heavy',
            done_today: 'poured foundation',
            do_next: 'framing',
          },
          {
            id: 100902,
            created_by: 100102,
            location: 100502,
            date: 'December 1, 2018',
            challenges: 'We only have whisk brooms to clean up with',
            done_today: 'swept tiny piles of debris',
            do_next: 'continue sweeping for 14 days... or until the order of push brooms arrive',
          },
          {
            id: 100903,
            created_by: 100103,
            location: 100501,
            date: 'December 2, 2018',
            challenges: 'The frame of the building came crashing down like a house of cards',
            done_today: 'Played pick-up sticks',
            do_next: 'Not fail at life',
          }
        ])
        .then(() => knex.raw(`SELECT setval('reports_id_seq', (SELECT MAX(id) FROM reports));`))
    ]))
}
