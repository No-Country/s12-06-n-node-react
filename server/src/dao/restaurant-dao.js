import Restaurant from "../models";

const RestaurantDAO = {
	async getAllRestaurants() {
		try {
			const restaurants = await Restaurant.find();
			return restaurants;
		} catch (error) {
			throw new Error("[DAO] Error fetching restaurants:", error.message);
		}
	},

	async getRestaurantById() {
		try {
			const restaurant = await Restaurant.findById(_id);
			return restaurant;
		} catch (error) {
			throw new Error("[DAO] Error fetching restaurant by ID:", error.message);
		}
	},
};

export default RestaurantDAO;
