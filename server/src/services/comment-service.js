import { CommentModel, RestaurantModel } from "../models/index.js";

const CommentService = {
	async createComment(body) {
		const { restaurantId } = body;
		const comment = await CommentModel.create(body);
		// validar solo numeros enteros en rating
		// redondear a entero el rating
		// arreglo de cuantas estrellas del 1 al 5

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

		if (comment.length === 0) {
			return 0;
		}

		const totalRating = comment.reduce((sum, comment) => sum + comment.rating, 0);
		const newAverageRating = totalRating / comment.length;
		const roundedAverageRating = Math.round(newAverageRating * 10) / 10;

		const restaurant = await RestaurantModel.findOneAndUpdate(
			{ _id: restaurantId },
			{ averageRating: roundedAverageRating },
			{ new: true }
		);

		console.log("Total Rating:", totalRating);
		console.log("Average Rating:", restaurant.averageRating);

		return restaurant.averageRating;
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
