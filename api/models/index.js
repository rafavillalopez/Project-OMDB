const User = require("./User");
const Favorite = require("./Favorite");

User.belongsToMany(Favorite, { through: "userfavorites" });

module.exports = { User, Favorite };
