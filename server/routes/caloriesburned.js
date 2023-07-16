const express = require("express");
const router = express.Router();

// caloriesburned page route
router.get("/", function (req, res) {
  res.send("caloriesburned page");
});

module.exports = router;
