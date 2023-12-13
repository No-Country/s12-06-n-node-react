import { userService } from "../services/user-service.js";
import { handleHttp } from "../utils/error-handle.js";

const UserController = {
    async create(req, res) {
        try {
            const body = req.body;
            const user = await userService.createUser(body);

            return res.status(200).json(user);
        } catch (e) {
            handleHttp(res, "ERROR_POST_USER", e);
        }
    }
}

export default UserController;