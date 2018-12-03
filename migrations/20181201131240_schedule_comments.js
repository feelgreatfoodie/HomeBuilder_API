exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedule_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('schedule', 64).references('schedules.id').onDelete('CASCADE')
    table.string('comment', 64).references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedule_comments')
}
