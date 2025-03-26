const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genres: [String],
  photo: String,
  play_time: Number,
  rating: Number,
  all_comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  optional_fields: Object
});

module.exports = mongoose.model("Game", gameSchema);
