require("dotenv").config();

module.exports = {
  client: "pg",

  ////////////// Connexion ////////////////////

  // Pour le local:
  // connection: {
  //   user: process.env.DB_USER,
  //   database: process.env.DB_DATABASE,
  //   password: process.env.DB_PASSWORD,
  // },

  // Pour vercel:
  connection: {
    connectionString:
      process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  },

  ////////////////////////////////////////////////

  pool: {
    min: 0,
    max: 1,
  },

  migrations: {
    tableName: "knex_migrations",
    directory: `${process.cwd()}/pages/api/db/migrations`,
  },
  seeds: {
    directory: `${process.cwd()}/pages/api/db/seeds`,
  },
};
