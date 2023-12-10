import { CommentService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const CommentController = {
	async create(req, res) {
		try {
			const body = req.body;
			const comment = await CommentService.createComment(body);

			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_POST_COMMENT", e);
		}
	},

	async getCommentsByRestaurantId(req, res) {
		try {
			const restaurantId = req.params.RestaurantId;
			const body = { id: restaurantId };

			const comment = await CommentService.getCommentsById(body);

			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_GET_COMMENT", e);
		}
	},

	async getComments(req, res) {
		try {
			const comments = await CommentService.getComments();
			return res.status(200).json(comments);
		} catch (e) {
			handleHttp(res, "ERROR_GET_COMMENT", e);
		}
	},
	async update(req, res) {
		try {
			const commentId = req.params.CommentId;
			const userId = req.params.UserId;
			const body = { commentId, userId, ...req.body};

			const comment = await CommentService.updateComment(body);
			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_UPDATE_COMMENT", e);
		}
	},
	async delete(req, res) {
		try {
			const commentId = req.params.CommentId;
			const userId = req.params.UserId;
			
			const body = { commentId, userId };

			const comment = await CommentService.deleteComment(body);
			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_DELETE_COMMENT", e);
		}
	}
};

export default CommentController;
