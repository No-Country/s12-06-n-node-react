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
		const comment = await CommentModel.find();

		console.log("SERVICE GET COMMENT:", comment);
		return comment;
	},
	async updateComment(body) {
		const { commentId, userId, comment } = body;
		const text = comment;

		const result = await CommentModel.findById(commentId);
		if (result.userId !== userId) throw new Error("No puedes editar un comentario que no es tuyo");

		const commentUpdated = await CommentModel.findOneAndUpdate(
			{ _id: commentId },
			{ comment: text },
			{ new: true }
		);

		console.log("SERVICE UPDATE COMMENT:", commentUpdated);
		return commentUpdated;
	},

	async getAverageRating(restaurantId) {
		const comment = await CommentModel.find({ restaurantId });

		console.log("Comments for restaurantId:", restaurantId);
		console.log(comment);

		if (comment.length === 0) {
			return 0;
		}

		const totalRating = comment.reduce((sum, comment) => sum + comment.rating, 0);
		const averageRating = totalRating / comment.length;

		console.log("Total Rating:", totalRating);
		console.log("Average Rating:", averageRating);

		return averageRating;
	},

	async deleteComment(body) {
		const { commentId, userId } = body;

		const result = await CommentModel.findById(commentId);
		if (result.userId !== userId)
			throw new Error("No puedes eliminar un comentario que no es tuyo");

		const comment = await CommentModel.findByIdAndDelete(commentId);

		console.log("SERVICE DELETE COMMENT:", comment);
		return comment;
	},
};

export default CommentService;
