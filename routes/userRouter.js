import { Router } from "express";
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";
import {
  getApplicationStats,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.post("/update-user", updateCurrentUser);
router.get("/stats", getApplicationStats);

export default router;
