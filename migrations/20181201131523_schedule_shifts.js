exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedule_shifts', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('schedule').references('schedules.id').onDelete('CASCADE')
    table.integer('shifts').references('shifts.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedule_shifts')
}
