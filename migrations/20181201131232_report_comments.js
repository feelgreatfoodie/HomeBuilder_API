exports.up = function (knex, Promise) {
  return knex.schema.createTable('report_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('report', 64).references('reports.id').onDelete('CASCADE')
    table.string('comment', 64).references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('report_comments')
}
