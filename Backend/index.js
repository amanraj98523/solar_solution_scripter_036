const express = require("express");
const mongodbConnect = require("./db/db");

const app = express();

app.listen(4000, async () => {
  console.log("server started http://localhost:4000");
  await mongodbConnect();
});
