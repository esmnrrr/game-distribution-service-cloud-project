const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  total_play_time: { type: Number, default: 0 },
  average_rating: { type: Number, default: 0 },
  most_played_game: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = mongoose.model("User", userSchema);
