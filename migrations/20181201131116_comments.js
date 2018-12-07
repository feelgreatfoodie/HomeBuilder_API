exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.string('body', 800).notNullable().defaultTo('')
    table.integer('user').references('users.id').onDelete('CASCADE')
    table.integer('order').references('orders.id').onDelete('CASCADE')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
