exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedule_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('schedule').references('schedules.id').onDelete('CASCADE')
    table.integer('comment').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedule_comments')
}
