import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.create);
// router.post("/login", userValidation.login, UserController.login);

export default router;
// create & edit user
