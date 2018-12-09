exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.integer('created_by').references('users.id').onDelete('CASCADE')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedules')
}
