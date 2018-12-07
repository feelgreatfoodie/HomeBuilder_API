exports.up = function (knex, Promise) {
  return knex.schema.createTable('order_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('order_id').references('orders.id').onDelete('CASCADE')
    table.integer('comment_id').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('order_comments')
}
