import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authPermission } from "../middleware/authMiddleware.js";
import { profileAvatarUpload } from "../middleware/multerMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.patch(
  "/update-user",
  profileAvatarUpload.single("avatar"),
  validateUpdateUserInput,
  updateCurrentUser
);
router.get("/admin/stats", authPermission("admin"), getApplicationStats);

export default router;
