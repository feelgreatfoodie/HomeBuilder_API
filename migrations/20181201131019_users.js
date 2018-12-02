exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    //table.uuid()
    table.string('first_name', 255).notNullable().defaultTo('')
    table.string('last_name', 255).notNullable().defaultTo('')
    table.string('phone_number', 10).notnullable.defaultTo('')
    table.string('email_address', 255).defaultTo('')
    table.boolean('admin').defaultTo(false)
    table.specificType('hashed_password', 'char(60)').notNullable()
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
