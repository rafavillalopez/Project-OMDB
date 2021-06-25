const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const { User, Favorite } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        name: {
          [Op.substring]: req.query.name,
        },
      },
      include: [{ model: Favorite }],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Favorite }],
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/favorites", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Favorite }],
    });
    res.status(200).json(user.favorites);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/favorites/:movieId", async (req, res, next) => {
  try {
    const [user, [favorite]] = await Promise.all([
      User.findByPk(req.params.id),
      Favorite.findOrCreate({ where: { movieId: req.params.movieId } }),
    ]);

    await user.addFavorite(favorite);
    const newFavorites = await user.getFavorites();

    res.json(newFavorites);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/favorites/:movieId", async (req, res, next) => {
  try {
    const [user, favorite] = await Promise.all([
      User.findByPk(req.params.id),
      Favorite.findOne({ where: { movieId: req.params.movieId } }),
    ]);

    await user.removeFavorite(favorite);
    const newFavorites = await user.getFavorites();

    res.json(newFavorites);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
