const S = require("sequelize");
const db = require("../db");

class Favorite extends S.Model {}

Favorite.init(
  {
    movieId: {
      type: S.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize: db, modelName: "favorite", timestamps: false }
);

module.exports = Favorite;
 