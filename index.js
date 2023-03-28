const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Router = require("./routes");
app.use(Router);
const PORT = process.env.PORT || 3000;

const username = "prashantrai";
const password = "zCmPag6EQfqlav0I";
const cluster = "mongo-cluster";
const dbname = "mongotask";
const baseUrl = `mongodb+srv://${username}:${password}@${cluster}.qsxsrrt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(baseUrl);

const db = mongoose.connection;
try {
  db.once("open", function () {
    console.log("Mongo Atlas Connected successfully");
  });
} catch (error) {
  db.on("error......", console.error.bind(console, "connection error: "));
}





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
