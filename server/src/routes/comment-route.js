import { Router } from "express";
import { CommentController } from "../controllers/index.js";

const router = Router();

router.post("/create", CommentController.create);

export default router;
