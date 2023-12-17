import { CommentModel, RestaurantModel } from "../models/index.js";

const CommentService = {
	async createComment(body) {
		const { restaurantId } = body;
		const comment = await CommentModel.create(body);

		const comments = await CommentModel.find({ restaurantId });

		if (comments.length === 0) {
			return 0;
		}

		const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
		const newAverageRating = totalRating / comments.length;
		const roundedAverageRating = Math.round(newAverageRating * 10) / 10;

		await RestaurantModel.findOneAndUpdate(
			{ _id: restaurantId },
			{ averageRating: roundedAverageRating },
			{ new: true }
		);

		console.log("SERVICE CREATE COMMENT:", comment);
		return comment;
	},

	async getCommentsById(body) {
		const { id } = body;

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
		const { commentId,  comment } = body;
		const text = comment;

		const commentUpdated = await CommentModel.findOneAndUpdate(
			{ _id: commentId },
			{ comment: text },
			{ new: true }
		);

		console.log("SERVICE UPDATE COMMENT:", commentUpdated);
		return commentUpdated;
	},

	async deleteComment(body) {
		const { commentId } = body;
		const comment = await CommentModel.findByIdAndDelete(commentId);

		console.log("SERVICE DELETE COMMENT:", comment);
		return comment;
	},
};

export default CommentService;
