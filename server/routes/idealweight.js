const express = require("express");
const router = express.Router();

// bodyfat page route
router.get("/", function (req, res) {
  res.send("idealweight page");
});

module.exports = router;
