import { Router } from "express";
import { CategoryController } from "../controllers/index.js";

const router = Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategory);
router.post("/", CategoryController.postCategory);
router.put("/:id", CategoryController.putCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
