const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const itemsRouter = require("./routes/items");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemsRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
