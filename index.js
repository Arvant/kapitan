const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const payment = require("./routes/payment.routes");
const user = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use("/payments", payment);
app.use("/auth", user);

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
