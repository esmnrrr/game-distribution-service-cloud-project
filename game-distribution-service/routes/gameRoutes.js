const express = require("express");
const Game = require("../models/game");
const router = express.Router();

// Yeni oyun ekleme
router.post("/addGame", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
