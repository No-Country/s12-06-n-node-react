import { Router } from "express";
import { authController } from "../controllers/index.js";
import { authValidation } from "../middlewares/index.js";

const router = Router();

router.post("/", authValidation.register, authController.login);


export default router;