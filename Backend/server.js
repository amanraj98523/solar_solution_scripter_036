import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import loginRouter from "./routes/Login.js";
import connectDB from "./configs/db.js";
import bodyParser from "body-parser";
import otpRouter from "./routes/otprouter.js";
import pollRouter from "./routes/pollRouter.js";
import scalePollRouter from "./routes/Scallingpoll.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

import http from "http";
import { Server } from "socket.io";

// Initialize Express app
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO server with CORS configuration
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST"],
    credentials: true, // Allow credentials like cookies
  },
});

// CORS configuration for Express API
const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow credentials
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Middleware to attach Socket.IO instance to request
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Body parser middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.mongo_url }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS in production
      httpOnly: true,
      sameSite: "strict",
    },
  })
);

// API routes
app.use("/api", pollRouter);
app.use("/api", otpRouter);
app.use("/api", loginRouter);
app.use("/api", scalePollRouter);
// app.use("/api", trueOrFalseRouter);

// Default route
app.get("/", (req, res) => {
  res.send("this is home route");
});

// Start the server
const PORT = process.env.PORT || 3200;
server.listen(PORT, async () => {
  try {
    await connectDB(); // Ensure the database connection
    console.log("MongoDB connected");
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
  }
});
