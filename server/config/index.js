const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

mongoose
  .connect(
    process.env.CONNECTION_STRING.replace("<password>", process.env.DB_PASSWORD)
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


module.exports = app;