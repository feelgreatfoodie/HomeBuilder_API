exports.up = function (knex, Promise) {
  return knex.schema.createTable('order_items', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('order_id', 255).notNullable().references('orders.id').onDelete('CASCADE')
    table.string('item_id', 255).notNullable().references('items.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('order_items')
}
