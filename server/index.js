const express = require("express");
const app = express();
const port = 3000;

const bmi = require("./routes/bmi.js");

// route definition
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/bmi", bmi);

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
