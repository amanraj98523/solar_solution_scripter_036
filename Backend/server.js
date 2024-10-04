import express from "express";
import {} from "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";
import connetDB from "./configs/db.js";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import { strict } from "assert";
import loginrouter from "./routes/Login.js";
import pollrouter from "./routes/pollRouter.js";
import scalepoll from "./routes/Scallingpoll.js";


const app = express();

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

export { io };

const allowedOrigins = ["http://localhost:5173, http://localhost:3200/api"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use("/api", loginrouter);
app.use("/api", pollrouter);
app.use("/api", scalepoll)

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    cookie: {
      secure: process.env.NODE_ENV === "development",
      httpOnly: true,
      sameSite: strict,
    },
  })
);

const PORT = process.env.PORT || 3200;
server.listen(PORT, async () => {
  try {
    connetDB();
    console.log(`mongo connected`);
    console.log(`server is running at port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
