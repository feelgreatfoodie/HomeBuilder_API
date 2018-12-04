exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedule_shifts', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('schedule', 32).references('schedules.id').onDelete('CASCADE')
    table.string('shifts', 32).references('shifts.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedule_shifts')
}
