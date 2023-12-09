import { CommentModel } from "../models/index.js";

const CommentService = {
	async createComment(body) {
		const responseInsert = await CommentModel.create(body);

		console.log("SERVICE CREATE COMMENT:", responseInsert);
		return responseInsert;
	},

	async getCommentsById(body) {
		const { id } = body;
		// Comentario de Victor: Marvin, se puede usar findById() acá?
		const comments = await CommentModel.find({ restaurant_id: id });

		console.log("SERVICE GET COMMENT:", comments);
		return {
			error: false,
			message: "SERVICE GET COMMENT",
			// data: comments, // remover
		};
	},

	async getComments(body) {
		const comments = await CommentModel.find();

		console.log("SERVICE GET COMMENT:", comments);
		return {
			error: false,
			message: "SERVICE GET COMMENT",
			// data: comments, // remover
		};
	},
};

export default CommentService;
