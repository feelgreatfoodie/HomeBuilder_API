exports.up = function (knex, Promise) {
  return knex.schema.createTable('shifts', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.integer('location_id').references('jobsites.id').onDelete('CASCADE')
    table.dateTime('start_time').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('end_time').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('shifts')
}
