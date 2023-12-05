import { Router } from "express";
import { CommentController } from "../controllers/index.js";

const router = Router();

router.post("/create", CommentController.create);
router.get("/:RestaurantId", CommentController.getCommentsByRestaurantId);
router.get("/", CommentController.getComments);
router.patch("/:id", CommentController.update);
export default router;
