const { User } = require("./models");

(async () => {
  const user  = await User.findByPk(1)
  user.addFavorite("imdb123")
})()