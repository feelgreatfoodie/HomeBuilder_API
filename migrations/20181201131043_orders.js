exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('ordered_by', 255).references('users.id').onDelete('CASCADE')
    table.string('reviewed_by', 255)references('users.id').onDelete('CASCADE')
    table.boolean('approved').defaultTo(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo('')
    table.dateTime('reviewed_at').notNullable().defaultTo('')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
}
