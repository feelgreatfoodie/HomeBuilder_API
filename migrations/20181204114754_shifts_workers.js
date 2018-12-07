exports.up = function (knex, Promise) {
  return knex.schema.createTable('shifts_workers', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('shifts_id').references('shifts.id').onDelete('CASCADE')
    table.integer('workers_id').references('users.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('shifts_workers')
}
