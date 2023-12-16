import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.create);
router.patch("/update/:id", userValidation.update, UserController.update);

// agregar restaurante por id de usuario
router.post("/:id", userValidation.addRestaurant, UserController.createRestaurant);

export default router;