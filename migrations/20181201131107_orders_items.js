exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders_items', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('order_id').notNullable().references('orders.id').onDelete('CASCADE')
    table.integer('item_id').notNullable().references('items.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('orders_items')
}
