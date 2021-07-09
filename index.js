const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HIIII SASENDER REDDY ! Welcome to MARS");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
