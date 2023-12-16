import { Router } from "express";
import { CommentController } from "../controllers/index.js";
import { commentValidation, authValidation } from "../middlewares/index.js";

const router = Router();

router.post("/create", authValidation, commentValidation.create, CommentController.create);
router.get(
	"/:RestaurantId",
	commentValidation.getRestaurantComments,
	CommentController.getCommentsByRestaurantId
);
router.get("/", commentValidation.getAll, CommentController.getComments);
router.patch("/:CommentId/:UserId", commentValidation.update, CommentController.update);
router.delete("/:CommentId/:UserId", commentValidation.delete, CommentController.delete);

export default router;
