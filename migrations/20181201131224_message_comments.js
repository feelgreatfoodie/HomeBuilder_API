exports.up = function (knex, Promise) {
  return knex.schema.createTable('message_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('message', 64).references('messages.id').onDelete('CASCADE')
    table.string('comment', 64).references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('message_comments')
}
