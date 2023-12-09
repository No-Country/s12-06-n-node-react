import { Router } from "express";
import { categoryValidation } from "../middlewares/index.js";
import { CategoryController } from "../controllers/index.js";

const router = Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategory);
router.post("/", categoryValidation.create, CategoryController.postCategory);
router.put("/:id", CategoryController.putCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
