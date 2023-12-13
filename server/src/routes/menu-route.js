import { Router } from "express";
import { MenuController } from "../controllers/index.js";
import { menuValidation } from "../middlewares/index.js";

const router = Router();

router.get("/", MenuController.getMenus);
router.get("/:id", MenuController.getMenu);
router.post("/", menuValidation.create, MenuController.postMenu);
router.put("/:id", menuValidation.update, MenuController.putMenu);
router.delete("/:id", menuValidation.delete, MenuController.deleteMenu);

export default router;
