require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// MongoDB'ye bağlan
connectDB();

app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/userRoutes"));
app.use("/games", require("./routes/gameRoutes"));
app.use("/comments", require("./routes/commentRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda çalışıyor!`);
});


