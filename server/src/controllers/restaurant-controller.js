import RestaurantDAO from "../dao/restaurant-dao.js";

const RestaurantController = {
	async getAllRestaurants(req, res) {
		try {
			const restaurants = await RestaurantDAO.getAllRestaurants();
			res.status(200).json(restaurants);
		} catch (error) {
			res.status(500).json({ error: error.message });
			return;
		}
	},

	async getRestaurantById(req, res) {
		const { id } = req.params;
		try {
			const restaurant = await RestaurantDAO.getRestaurantById(id);
			if (!restaurant) {
				return res.status(404).json({ message: "Restaurant not found" });
			}
			res.status(200).json(restaurant);
		} catch (error) {
			res.status(500).json({ error: error.message });
			return;
		}
	},
};

export default RestaurantController;
