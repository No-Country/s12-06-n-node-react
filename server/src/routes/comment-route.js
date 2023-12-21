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
router.patch("/:CommentId", authValidation, commentValidation.update, CommentController.update);
router.delete("/:CommentId", authValidation, commentValidation.delete, CommentController.delete);

export default router;
/**
 * endpoints a autenticar:
 * - /comment/create - POST
 * - /commentId/:UserId - PATCH
 *  - /:commentId/:UserId - DELETE
 */
