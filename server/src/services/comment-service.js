import { CommentModel } from "../models/index.js";

const CommentService = {
	async createComment(body) {
		const comment = await CommentModel.create(body);

		console.log("SERVICE CREATE COMMENT:", comment);
		return comment;
	},

	async getCommentsById(body) {
		const { id } = body;
		// Comentario de Victor: Marvin, se puede usar findById() acá?
		// Comentario de Marvin: Victor, findById() solo se puede usar si el id es el _id de mongo, si es otro campo no se puede usar :D
		const comment = await CommentModel.find({ restaurantId: id });

		console.log("SERVICE GET COMMENT:", comment);
		return comment;
	},

	async getComments() {
		const comments = await CommentModel.find();

		console.log("SERVICE GET COMMENT:", comments);
		return comments;
	},
	async updateComment(body){
		const { commentId, comment } = body;
		const text = comment;

		const commentUpdated = await CommentModel.findOneAndUpdate({ _id: commentId }, { comment: text }, { new: true });
		
		console.log("SERVICE UPDATE COMMENT:", commentUpdated);
		return commentUpdated;
	}
};

export default CommentService;
