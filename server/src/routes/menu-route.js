import { Router } from "express";
import { MenuController } from "../controllers/index.js";

const router = Router();

router.get("/", MenuController.getMenus);
router.get("/:id", MenuController.getMenu);
router.post("/", MenuController.postMenu);
router.put("/:id", MenuController.putMenu);
router.delete("/:id", MenuController.deleteMenu);

export default router;
