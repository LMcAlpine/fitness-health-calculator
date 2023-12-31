const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const bmi = require("./routes/bmi.js");
const bodyfat = require("./routes/bodyfat.js");
const idealweight = require("./routes/idealweight.js");
const caloriesburned = require("./routes/caloriesburned.js");

app.use(cors());
app.use("/bmi", bmi);
app.use("/bodyfat", bodyfat);
app.use("/idealweight", idealweight);
app.use("/caloriesburned", caloriesburned);

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
