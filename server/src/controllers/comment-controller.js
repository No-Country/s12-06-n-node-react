import { CommentService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";
// import { commentValidator } from "../middlewares/index.js"

const CommentController = {
    async create(req, res) {
        try {
            // const result = commentValidator(req.body);
            // if (result.error) {
            //     handleHttp(res, "ERROR_POST_RESTAURANT", result.error);
            //     // res.status(400).json(result.error);
            // }

            const comment = await CommentService.postComment(req.body);
            if(!comment.error){
                return res.status(200).json(comment);
            }

            // handleHttp(res, "ERROR_POST_RESTAURANT", comment.error);


            
            // const { error, value } = commentValidator.validate(req.body);
            // if (error) {
            //     throw new Error(error.message);
            // }
            // const comment = await CommentService.create(value);
            // res.json(comment);
        
        } catch (error) {
            handleHttp(res, "ERROR_POST_RESTAURANT", error);
        }
    }

};

export default CommentController;
