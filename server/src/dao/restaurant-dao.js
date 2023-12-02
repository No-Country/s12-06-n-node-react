import { RestaurantModel } from "../models/index.js";

const RestaurantDAO = {
	async getAllRestaurants() {
		try {
			const restaurants = await RestaurantModel.find();
			console.log("DAO RESTAURANT GET ALL:", restaurants);
			return restaurants;
		} catch (error) {
			throw new Error("[DAO] Error fetching restaurants:", error.message);
		}
	},

	async getRestaurantById(id) {
		try {
			const restaurant = await RestaurantModel.findById(id);
			console.log("DAO RESTAURANT GET ONE:", restaurant);
			return restaurant;
		} catch (error) {
			throw new Error("[DAO] Error fetching restaurant by ID:", error.message);
		}
	},
};

export default RestaurantDAO;
