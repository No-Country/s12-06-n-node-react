import { Router } from "express";
import { AuthController } from "../controllers/index.js";
import { authValidation, tokenValidation } from "../middlewares/index.js";

const router = Router();

router.post("/", authValidation.login, AuthController.login);
// router.get("/token", tokenValidation, AuthController.token);

export default router;
