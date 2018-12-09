exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments('id')
    table.string('eng_name', 64).notNullable().defaultTo('')
    table.string('esp_name', 64).notNullable().defaultTo('')
    table.string('category', 32).defaultTo('')
    table.string('sub_category', 32).defaultTo('')
    table.string('image_url', 255).defaultTo('')
    table.string('sold_by', 32).defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('items')
}
