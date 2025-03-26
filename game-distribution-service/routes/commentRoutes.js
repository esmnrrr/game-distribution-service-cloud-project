const express = require("express");
const Comment = require("../models/comment");
const router = express.Router();

// Yeni yorum ekleme
router.post("/addComment", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
