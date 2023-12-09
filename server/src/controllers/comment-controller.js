import { CommentService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";
import { commentValidator } from "../middlewares/index.js";
import { commentPartialValidator } from "../middlewares/comment-middleware.js";

const CommentController = {
	async create(req, res) {
		try {
			const body = req.body;
			const result = commentValidator(body);
			
			if (result.error) {
				handleHttp(res, "ERROR_POST_COMMENT", result.error);
			}

			const comment = await CommentService.postComment(result.data);

			if (comment.error) {
				handleHttp(res, "ERROR_POST_COMMENT", comment.error);
			}

			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_POST_COMMENT", e);
		}
	},

	async getCommentsByRestaurantId(req, res) {
		try {
			const id = req.params.id;

			const result = commentPartialValidator({ id });
			if (result.error) {
				handleHttp(res, "ERROR_GET_COMMENT", result.error);
			}

			const comment = await CommentService.getCommentsById(result.data);
			if (comment.error) {
				handleHttp(res, "ERROR_GET_COMMENT", comment.error);
			}

			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_GET_COMMENT", e);
		}
	},

	async getComments(req, res) {
		try {
			const comments = await CommentService.getComments();
			if (comments.error) {
				handleHttp(res, "ERROR_GET_COMMENT", comments.error);
			}

			return res.status(200).json(comments);
		} catch (e) {
			handleHttp(res, "ERROR_GET_COMMENT", e);
		}
	},
	async update(req, res) {
		try {
			const id = req.params.id;
			const body = {id, ...req.body};

			const result = commentPartialValidator(body);
			if (result.error) {
				handleHttp(res, "ERROR_UPDATE_COMMENT", result.error);
			}

			const comment = await CommentService.updateComment(result.data);
			if (comment.error) {
				handleHttp(res, "ERROR_UPDATE_COMMENT", comment.error);
			}

			return res.status(200).json(comment);
		} catch (e) {
			handleHttp(res, "ERROR_UPDATE_COMMENT", e);
		}
	}
};

export default CommentController;
