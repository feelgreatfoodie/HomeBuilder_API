
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobsites').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('jobsites').insert([
        { id: 100501,
          name: 'Galvanize',
          street_address: '1023 Walnut',
          city: 'Boulder',
          state: 'CO',
          zip: '80302',
        },
        { id: 100502,
          name: 'Costco',
          street_address: '600 Marshall Rd',
          city: 'Superior',
          state: 'CO',
          zip: '80027',
        },
        { id: 100503,
          name: 'DreamStay',
          street_address: '255 Main St',
          city: 'Venice',
          state: 'CA',
          zip: '90291',
        },
      ])
    ]))
}
