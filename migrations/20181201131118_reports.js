exports.up = function (knex, Promise) {
  return knex.schema.createTable('reports', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.integer('created_by').references('users.id').onDelete('CASCADE')
    table.integer('location').references('jobsites.id').onDelete('CASCADE')
    table.string('date', 64).notNullable().defaultTo('')
    table.string('challenges', 255).notNullable().defaultTo('')
    table.string('done_today', 255).notNullable().defaultTo('')
    table.string('do_next', 255).notNullable().defaultTo('')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('reports')
}
