
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('emotions', (table) => {
    table.increments('emotion_id')
    table.string('emotion')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('emotions')
};
