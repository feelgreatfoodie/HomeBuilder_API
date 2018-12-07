exports.up = function (knex, Promise) {
  return knex.schema.createTable('report_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('report').references('reports.id').onDelete('CASCADE')
    table.integer('comment').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('report_comments')
}
