exports.up = function (knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.integer('user').references('users.id').onDelete('CASCADE')
    table.string('title', 64).notNullable().defaultTo('')
    table.string('body', 800).notNullable().defaultTo('')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
}
