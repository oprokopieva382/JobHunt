import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.post("/update-user", validateUpdateUserInput, updateCurrentUser);
router.get("/stats", getApplicationStats);

export default router;
