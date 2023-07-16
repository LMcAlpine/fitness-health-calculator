const express = require("express");
const router = express.Router();

// bmi page route
router.get("/", function (req, res) {
  res.send("bmi page");
});

module.exports = router;
