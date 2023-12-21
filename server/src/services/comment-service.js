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

		const restaurant = await RestaurantModel.findById(restaurantId);
		
		const totalPerStarts = restaurant.rating.total_per_starts;

		comments.forEach((comment) => {
			if (comment.rating === 1) {
				totalPerStarts[0] += 1;
			} else if (comment.rating === 2) {
				totalPerStarts[1] += 1;
			} else if (comment.rating === 3) {
				totalPerStarts[2] += 1;
			} else if (comment.rating === 4) {
				totalPerStarts[3] += 1;
			} else if (comment.rating === 5) {
				totalPerStarts[4] += 1;
			}
		});

		const rating = {
			average: roundedAverageRating,
			total: comments.length,
			total_per_starts: totalPerStarts 
		}

		await RestaurantModel.findOneAndUpdate(
			{ _id: restaurantId }, { $set: { rating }},
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
