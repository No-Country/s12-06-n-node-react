import { Router } from "express";
import { restaurantValidation } from "../middlewares/index.js";
import { RestaurantController } from "../controllers/index.js";

const router = Router();

router.get("/", RestaurantController.getRestaurants);
router.get("/:id", RestaurantController.getRestaurant);
router.get("/:id", RestaurantController.getRestaurantById);
// router.post("/", restaurantValidation.create, RestaurantController.postRestaurant);
router.post("/", RestaurantController.postRestaurant);
router.put("/:id", RestaurantController.putRestaurant);
router.delete("/:id", RestaurantController.deleteRestaurant);

export default router;
