exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('user', 64).references('users.id').onDelete('CASCADE')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo('')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedules')
}
