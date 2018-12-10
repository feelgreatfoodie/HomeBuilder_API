exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('messages').insert([
        { id: 100801,
          title: 'Remember to fill out your TPS reports',
          body: 'If you could fill out that TPS report as soon as possible, that would be, ummmmmmmmm, greaaaaat.',
          created_by: 100103
        },
        { id: 100802,
          title: 'Saturday and Sunday Work',
          body: `I'm going to need all of you to come into work on Saturday... Ummmmmmmmm yeaaaaaahhhhhh, aaaaand also on Sunday. Mmmkay thanks. *Takes sip of coffee*`,
          created_by: 100102
        },
        { id: 100803,
          title: 'The Subtle Art of Paper Jamming',
          body: 'My name is Michael Bolton and I hate copy machines.',
          created_by: 100101
        }
      ])
      .then(() => knex.raw(`SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));`))
    ]))
}
