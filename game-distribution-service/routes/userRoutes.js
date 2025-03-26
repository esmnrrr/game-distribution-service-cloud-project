const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Yeni kullanıcı ekleme
router.post("/addUser", async (req, res) => {
  try {
    const newUser = new User({ name: req.body.name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
