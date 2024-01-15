import { Router } from "express";

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
