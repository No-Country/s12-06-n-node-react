import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.register);
router.post("/login", userValidation.login, UserController.login);


// create & edit user
