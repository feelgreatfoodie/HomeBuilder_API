exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.integer('ordered_by').references('users.id').onDelete('CASCADE')
    table.integer('reviewed_by').references('users.id').onDelete('CASCADE')
    table.boolean('approved').defaultTo(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').defaultTo(null)
    table.dateTime('reviewed_at').defaultTo(null)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
}
