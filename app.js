const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/auth_host_demo");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
