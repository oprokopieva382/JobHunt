import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import rateLimit from "express-rate-limit";
const router = Router();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, //5 min
  max: 5,
  message: { msg: "IP rate limit exceeded, retry in 5 minutes." },
});

router.post("/register", limiter, validateRegisterInput, register);
router.post("/login", limiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
