exports.up = function (knex, Promise) {
  return knex.schema.createTable('order_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('order_id', 64).references('orders.id').onDelete('CASCADE')
    table.string('comment_id', 64).references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('order_comments')
}
