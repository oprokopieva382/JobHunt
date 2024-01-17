import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authPermission } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.post("/update-user", validateUpdateUserInput, updateCurrentUser);
router.get("/admin/stats", authPermission("admin"), getApplicationStats);

export default router;
