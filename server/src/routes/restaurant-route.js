import { Router } from "express";
import { RestaurantController } from "../controllers/index.js";

const router = Router();

router.get("/", RestaurantController.getRestaurants);
router.get("/:id", RestaurantController.getRestaurant);
router.post("/", RestaurantController.postRestaurant);
router.put("/:id", RestaurantController.putRestaurant);
router.delete("/:id", RestaurantController.deleteRestaurant);

export default router;
