import { Router } from "express";
import { UserController } from "../controllers/index.js";
import { userValidation } from "../middlewares/index.js";

const router = Router();

router.post("/register", userValidation.register, UserController.create);
// actualizar usuario por id de usuario
router.patch("/update/:id", userValidation.update, UserController.update);
// agregar restaurante por id de usuario
router.post("/:id", userValidation.addRestaurant, UserController.createRestaurant);
// agregar favorito

// router.post("/login", userValidation.login, UserController.login);

export default router;
// create & edit user
