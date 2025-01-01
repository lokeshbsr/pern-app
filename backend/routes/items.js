const express = require("express");
const router = express.Router();
const pool = require("../db/db");

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await pool.query("SELECT * FROM items");
    res.json(items.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add a new item
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
