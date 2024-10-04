const express = require("express");
const mongodbConnect = require("./db/db");
const authRouter = require("./routes/authRoute");

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", authRouter);

app.listen(4000, async () => {
  console.log("server started http://localhost:4000");
  await mongodbConnect();
});
