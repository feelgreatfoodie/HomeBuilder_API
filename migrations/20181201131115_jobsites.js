exports.up = function (knex, Promise) {
  return knex.schema.createTable('jobsites', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.string('name', 64).notNullable().defaultTo('')
    table.string('street_address', 32).notNullable().defaultTo('')
    table.string('city', 32).notNullable().defaultTo('')
    table.string('state', 2).notNullable().defaultTo('')
    table.integer('zip', 5).notNullable()
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('jobsites')
}
