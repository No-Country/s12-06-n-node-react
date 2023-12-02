import { RestaurantDAO } from "../dao/index.js";

const RestaurantController = {
	async getAllRestaurants(req, res) {
		try {
			const restaurants = await RestaurantDAO.getAllRestaurants();
			console.log("CONTROLLER RESTAURANT GET ALL:", restaurants);
			res.status(200).json(restaurants);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	async getRestaurantById(req, res) {
		const { id } = req.query;
		try {
			const restaurant = await RestaurantDAO.getRestaurantById(id);
			if (!restaurant) {
				return res.status(404).json({ message: "Restaurant not found" });
			}
			res.status(200).json(restaurant);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

export default RestaurantController;
