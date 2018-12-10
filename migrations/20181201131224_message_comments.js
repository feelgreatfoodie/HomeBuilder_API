exports.up = function (knex, Promise) {
  return knex.schema.createTable('messages_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('message_id').references('messages.id').onDelete('CASCADE')
    table.integer('comment_id').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('messages_comments')
}
