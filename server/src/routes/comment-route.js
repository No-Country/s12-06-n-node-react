import { Router } from "express";
import { CommentController } from "../controllers/index.js";

const router = Router();

router.post("/create", CommentController.create);
router.get("/:id", CommentController.getCommentsByRestaurantId);
router.get("/", CommentController.getComments);

export default router;
