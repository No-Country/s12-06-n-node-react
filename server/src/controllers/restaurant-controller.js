import { RestaurantService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const RestaurantController = {
	async getRestaurants(req, res) {
		try {
			const response = await RestaurantService.getAllRestaurants();
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_RESTAURANTS", e);
		}
	},

	async getRestaurant(req, res) {
		const { id } = req.params;
		try {
			const response = await RestaurantService.getRestaurantById(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_RESTAURANT", e);
		}
	},

	async postRestaurant({ body }, res) {
		try {
			const response = await RestaurantService.createRestaurant(body);
			return res.status(201).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_POST_RESTAURANT", e);
		}
	},

	async putRestaurant(req, res) {
		try {
			const { id } = req.params;
			const body = req.body;
			const response = await RestaurantService.updateRestaurant(id, body);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_PUT_RESTAURANT", e);
		}
	},

	async deleteRestaurant(req, res) {
		try {
			const { id } = req.params;
			const response = await RestaurantService.removeRestaurant(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_DELETE_RESTAURANT", e);
		}
	},
};

export default RestaurantController;
