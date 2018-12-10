exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('schedule_id').references('schedules.id').onDelete('CASCADE')
    table.integer('comment_id').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedules_comments')
}
