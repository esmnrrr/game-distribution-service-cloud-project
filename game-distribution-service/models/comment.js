const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  game_id: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  comment: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", commentSchema);
