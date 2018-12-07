
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Steve',
          last_name: 'Rogers',
          phone_number: '3105551212',
          email_address: 'steveRogers@gmail.com',
          admin: true,
          hashed_password: '$2b$10$tY1M/HeKgkq0ST8nnDfyp.noPA3.YF5J5ITxn0NOjvkPlMDIefRUS',
        },
        {
          id: 2,
          first_name: 'Tony',
          last_name: 'Stark',
          phone_number: '3035551212',
          email_address: 'tonyStark@gmail.com',
          admin: false,
          hashed_password: '$2b$10$tY1M/HeKgkq0ST8nnDfyp.noPA3.YF5J5ITxn0NOjvkPlMDIefRUS',
        },
        {
          id: 3,
          first_name: 'Thor',
          last_name: 'GodOfThunder',
          phone_number: '7205551212',
          email_address: 'thor@gmail.com',
          admin: false,
          hashed_password: '$2b$10$tY1M/HeKgkq0ST8nnDfyp.noPA3.YF5J5ITxn0NOjvkPlMDIefRUS',
        },

      ])
      .then(() => knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`))
    })
}
