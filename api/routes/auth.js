const express = require("express");
const router = express.Router();
const { User } = require("../models");
const passport = require("passport");

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.json(req.user);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({});
});

module.exports = router;
