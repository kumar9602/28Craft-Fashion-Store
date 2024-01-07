const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// body-parser
app.use(bodyParser.json());

// Test
app.get("/home", (req, res) => {
  res.send("Your Hit the api");
});

app.listen(4200, console.log("Server is Running..."));
