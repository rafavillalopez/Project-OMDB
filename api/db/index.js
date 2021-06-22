const S = require("sequelize");

const db = new S("postgres://postgres:postgres@localhost:5432/omdb", {
  logging: false,
});

module.exports = db;
