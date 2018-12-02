exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('eng_name', 255).notNullable().defaultTo('')
    table.string('esp_name', 255).notNullable().defaultTo('')
    table.string('category', 255).defaultTo('')
    table.string('image_url', 255).defaultTo('')
    table.string('sold_by', 255).defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('items')
}
