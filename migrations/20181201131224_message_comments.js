exports.up = function (knex, Promise) {
  return knex.schema.createTable('message_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('message').references('messages.id').onDelete('CASCADE')
    table.integer('comment').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('message_comments')
}
