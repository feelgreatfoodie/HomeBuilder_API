exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('ordered_by', 255).notNullable().references('id').inTable('users')
    table.string('reviewed_by', 255).references('id').inTable('users').defaultTo('')
    table.boolean('approved').defaultTo(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo('')
    table.dateTime('reviewed_at').notNullable().defaultTo('')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
}
