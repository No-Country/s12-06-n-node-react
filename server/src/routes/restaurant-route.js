import { Router } from "express";
import { RestaurantController } from "../controllers/index.js";

const router = Router();

router.get("/", RestaurantController.getAllRestaurants);
router.get("/:id", RestaurantController.getRestaurantById);
// las otras rutas de restaurant..

export default router;
