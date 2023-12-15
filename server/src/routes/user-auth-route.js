import { Router } from "express";
import { AuthController } from "../controllers/index.js";
import { authValidation } from "../middlewares/index.js";

const router = Router();

router.post("/", authValidation.login, AuthController.login);
router.get("/token", authValidation.token, AuthController.token);

export default router;