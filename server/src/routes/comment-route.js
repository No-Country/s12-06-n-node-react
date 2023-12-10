import { Router } from "express";
import { CommentController } from "../controllers/index.js";
import { commentValidation } from "../middlewares/index.js";

const router = Router();

router.post("/create", commentValidation.create, CommentController.create);
router.get("/:restaurantId", commentValidation.getRestaurantComments, CommentController.getCommentsByRestaurantId);
router.get("/", commentValidation.getAll, CommentController.getComments);
router.patch("/:commentId/:userId", commentValidation.update, CommentController.update);
router.delete("/:commentId/:userId", commentValidation.delete, CommentController.delete);

export default router;