exports.up = function (knex, Promise) {
  return knex.schema.createTable('reports_comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('report_id').references('reports.id').onDelete('CASCADE')
    table.integer('comment_id').references('comments.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('reports_comments')
}
