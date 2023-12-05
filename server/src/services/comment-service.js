import { CommentModel } from "../models/index.js";
import crypto from "crypto";

const CommentService = {
	async postComment(body) {
		const id = crypto.randomUUID();
		const comment = new CommentModel(body);

		comment.id = id;
		const responseInsert = await comment.save();

		console.log("SERVICE CREATE COMMENT:", responseInsert);
		return {
			error: false,
			message: "SERVICE CREATE COMMENT",
		};
	},
	async getCommentsById(body) {
		const { id } = body;
		const comments = await CommentModel.find({ restaurant_id: id });

		console.log("SERVICE GET COMMENT:", comments);
		return {
			error: false,
			message: "SERVICE GET COMMENT",
			// data: comments, // remover
		};
	},
	async getComments(body){
		const comments = await CommentModel.find();

		console.log("SERVICE GET COMMENT:", comments);
		return {
			error: false,
			message: "SERVICE GET COMMENT",
			// data: comments, // remover
		};

	}
};

export default CommentService;
