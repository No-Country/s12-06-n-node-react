import { UserService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const UserController = {
	async create(req, res) {
		try {
			const body = req.body;
			const user = await UserService.createUser(body);

			return res.status(200).json(user);
		} catch (e) {
			handleHttp(res, "ERROR_POST_USER", e);
		}
	},
	async login(req, res) {
		try {
			const body = req.body;
			const user = await UserService.login(body);

			return res.status(200).json(user);
		} catch (e) {
			handleHttp(res, "ERROR_LOGIN", e);
		}
	},
	async update(req, res) {
		try {
			const id = req.params.id;
			const body = { id, ...req.body };

			const user = await UserService.updateUser(body);

			return res.status(200).json(user);
		} catch (e) {
			handleHttp(res, "ERROR_PATCH_USER", e);
		}
	},
	async get(req, res) {
		try {
			const id = req.params.id;
			const user = await UserService.getUser(id);

			return res.status(200).json(user);
		} catch (e) {
			handleHttp(res, "ERROR_GET_USER", e);
		}
	},
	async createRestaurant(req, res) {
		try {
			const userId = req.params.id;
			const body = { userId, ...req.body };

			const user = await UserService.createRestaurant(body);

			return res.status(200).json(user);
		} catch (e) {
			handleHttp(res, "ERROR_POST_USER", e);
		}
	},
};

export default UserController;
