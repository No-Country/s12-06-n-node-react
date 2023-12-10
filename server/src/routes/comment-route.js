import { Router } from "express";
import { CommentController } from "../controllers/index.js";
import { commentValidation } from "../middlewares/index.js";

const router = Router();

router.post("/create", commentValidation.create, CommentController.create);
// router.get("/:RestaurantId", CommentController.getCommentsByRestaurantId);
// router.get("/", CommentController.getComments);
// router.patch("/:CommentId/:userId", CommentController.update);

export default router;