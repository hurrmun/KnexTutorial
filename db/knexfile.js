// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knex_starter",
      user: "hermanlyx",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  //   staging: {
  //     client: 'postgresql',
  //     connection: {
  //       database: 'my_db',
  //       user:     'username',
  //       password: 'password'
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   },

  //   production: {
  //     client: 'postgresql',
  //     connection: {
  //       database: 'my_db',
  //       user:     'username',
  //       password: 'password'
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   }
};
