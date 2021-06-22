const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: S.STRING,
      allowNull: false,
    },

    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user", timestamps: false }
);

User.beforeCreate(async (user) => {
  user.salt = await bcrypt.genSalt(6);
  user.password = await user.hash(user.password, user.salt);
});

module.exports = User;
