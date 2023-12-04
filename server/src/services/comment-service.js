import { CommentModel } from "../models/index.js";
import crypto from "crypto";

const CommentService = {
    async postComment(body) {
        const id = crypto.randomUUID();
        const comment = new CommentModel(body);

        comment.id = id;
        const responseInsert = await comment.save();
        console.log("SERVICE CREATE COMMENT:", responseInsert);
    }
};

export default CommentService;