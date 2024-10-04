import { Router } from "express";
import {
  allpolls,
  createPoll,
  onepoll,
} from "../controllers/pollController.js";
import { allpollres, MCQresponse } from "../controllers/MCQresponse.js";
import { protect } from "../middlewares/auth.js";

const pollrouter = Router();

pollrouter.post("/polls", protect, createPoll);
pollrouter.post("/polls/:pollId/responses", protect, MCQresponse);

pollrouter.get("/polls/:pollId/responses", protect, allpollres);
pollrouter.get("/polls", protect, allpolls);
pollrouter.get("/Polls/:pollId", onepoll);
export default pollrouter;
