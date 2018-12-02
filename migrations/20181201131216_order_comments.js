exports.up = function (knex, Promise) {
  return knex.schema.createTable('order_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('order_id', 255).notNullable().references('orders.id').onDelete('CASCADE')
    table.string('comment_id', 255).notNullable().references('comments.id').onDelete('CASCADE')
    table.string('colname3', 255).notNullable().defaultTo('')
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('order_comments')
}
