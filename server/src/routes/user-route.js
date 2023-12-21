import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation /** , tokenValidation */ } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.create);
router.post("/login", userValidation.login, UserController.login);

router.get("/:id", userValidation.get, UserController.get);
router.patch("/update/:id", userValidation.update, UserController.update);

// router.get("/token", tokenValidation, AuthController.token);

// agregar restaurante por id de usuario
router.post("/:id", userValidation.addRestaurant, UserController.createRestaurant);

export default router;
