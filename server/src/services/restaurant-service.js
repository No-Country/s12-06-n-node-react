import { RestaurantModel } from "../models/index.js";

const RestaurantService = {
	async getAllRestaurants() {
		const responseGetAll = await RestaurantModel.find();
		// lógica que traiga el categories.category
		console.log("SERVICE GET RESTAURANTS:", responseGetAll);
		return responseGetAll;
	},

	async getRestaurantById(id) {
		const responseGetById = await RestaurantModel.findById(id);
		console.log("SERVICE GET RESTAURANT:", responseGetById);
		return responseGetById;
	},

	async createRestaurant(body) {
		const responseInsert = await RestaurantModel.create(body);
		console.log("SERVICE CREATE RESTAURANT:", responseInsert);
		return responseInsert;
	},

	async updateRestaurant(id, data) {
		const responseUpdate = await RestaurantModel.findOneAndUpdate({ _id: id }, data, { new: true });
		console.log("SERVICE UPDATE RESTAURANT:", responseUpdate);
		return responseUpdate;
	},

	async removeRestaurant(id) {
		const responseRemove = await RestaurantModel.deleteOne({ _id: id });
		console.log("SERVICE REMOVE RESTAURANT:", responseRemove);
		return responseRemove;
	},
};

export default RestaurantService;
