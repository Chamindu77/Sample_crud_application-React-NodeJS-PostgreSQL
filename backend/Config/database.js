const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,   // Database name
  process.env.DB_USER,   // Database user
  process.env.DB_PASSWORD,   // Database password
  {
    host: process.env.DB_HOST,   // Database host
    dialect: 'postgres',   // Change the dialect to 'postgres' for PostgreSQL
    port: process.env.DB_PORT || 5432,   // Default PostgreSQL port is 5432
    logging: false,   // Optional: disable logging (useful for cleaner output)
  }
);

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;




