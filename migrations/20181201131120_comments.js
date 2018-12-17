exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.string('body', 800).notNullable().defaultTo('')
    table.integer('created_by').notNullable().references('users.id').onDelete('CASCADE')
    table.integer('order_id').references('orders.id').onDelete('CASCADE')
    table.integer('message_id').references('messages.id').onDelete('CASCADE')
    table.integer('report_id').references('reports.id').onDelete('CASCADE')
    table.integer('schedule_id').references('schedules.id').onDelete('CASCADE')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').defaultTo(null)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
