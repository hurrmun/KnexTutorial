exports.up = function (knex) {
  return knex.schema.createTable("person", (table) => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true); // 1st arg created at, 2nd arg updated at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("person");
};
