const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const payment = require("./routes/payment.routes");

const app = express();

app.use(express.json());
app.use("/payments", payment);

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
