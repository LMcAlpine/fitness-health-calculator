const express = require("express");
const app = express();
const port = 3000;

const bmi = require("./routes/bmi.js");
const bodyfat = require("./routes/bodyfat.js");
const idealweight = require("./routes/idealweight.js");

// route definition
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/bmi", bmi);
app.use("/bodyfat", bodyfat);
app.use("/idealweight", idealweight);

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
