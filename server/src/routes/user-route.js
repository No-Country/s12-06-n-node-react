import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.create);
// agregar restaurante
router.post("/:id", userValidation.addRestaurant, UserController.createRestaurant);
// agregar favorito

// router.post("/login", userValidation.login, UserController.login);

export default router;
// create & edit user
