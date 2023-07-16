const express = require("express");
const router = express.Router();

// bodyfat page route
router.get("/", function (req, res) {
  res.send("bodyfat page");
});

module.exports = router;
