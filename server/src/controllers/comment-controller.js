import { CommentService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";
import { commentValidator } from "../middlewares/index.js";

const CommentController = {
	async create(req, res) {
		try {
			const result = commentValidator(req.body);
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
};

export default CommentController;
