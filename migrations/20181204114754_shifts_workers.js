exports.up = function (knex, Promise) {
  return knex.schema.createTable('shifts_workers', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('shift', 32).references('shifts.id').onDelete('CASCADE')
    table.string('worker', 32).references('users.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('shifts_workers')
}
