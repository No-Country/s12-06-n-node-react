import { RestaurantModel } from "../models/index.js";

const RestaurantService = {
	async getAllRestaurants() {
		// Obtener todos los restaurantes con las categorías, menus y comments poblados.
		const responseGetAll = await RestaurantModel.find()
			.populate("categories", "_id category urlImgCategories")
			.populate("menus", "_id name description price imgMenus")
			.populate("comments", "_id userId comment ratting");

		const formattedRestaurants = responseGetAll.map(restaurant => ({
			...restaurant.toObject(),
			categories: restaurant.categories.map(category => ({
				_id: category._id,
				category: category.category,
				urlImgCategories: category.urlImgCategories,
			})),
			menus: restaurant.menus.map(menu => ({
				_id: menu._id,
				name: menu.name,
				description: menu.description,
				price: menu.price,
				imgMenus: menu.imgMenus,
			})),
			comments: restaurant.comments.map(comment => ({
				_id: comment._id,
				userId: comment.userId,
				comment,
				ratting: comment.ratting,
			})),
		}));

		return formattedRestaurants;

		// const responseGetAll = await RestaurantModel.find();
		// console.log("SERVICE GET RESTAURANTS:", responseGetAll);
		// return responseGetAll;
	},

	async getRestaurantById(id) {
		const responseGetById = await RestaurantModel.findById(id)
			.populate("categories", "_id category urlImgCategories")
			.populate("menus", "_id name description price imgMenus")
			.populate("comments", "_id userId comment ratting");

		const formattedRestaurant = {
			...responseGetById.toObject(),
			categories: responseGetById.categories.map(category => ({
				_id: category._id,
				category: category.category,
				urlImgCategories: category.urlImgCategories,
			})),
			menus: responseGetById.menus.map(menu => ({
				_id: menu._id,
				name: menu.name,
				description: menu.description,
				price: menu.price,
				imgMenus: menu.imgMenus,
			})),
			comments: responseGetById.comments.map(comment => ({
				_id: comment._id,
				userId: comment.userId,
				comment,
				ratting: comment.ratting,
			})),
		};

		console.log("SERVICE GET RESTAURANT:", formattedRestaurant);
		return formattedRestaurant;

		// const responseGetById = await RestaurantModel.findById(id);
		// console.log("SERVICE GET RESTAURANT:", responseGetById);
		// return responseGetById;
	},

	async createRestaurant(body) {
		const responseInsert = await RestaurantModel.create(body);
		console.log("SERVICE CREATE RESTAURANT:", responseInsert);
		return responseInsert;
	},

	async updateRestaurant(id, data) {
		const responseUpdate = await RestaurantModel.findOneAndUpdate({ _id: id }, data, { new: true })
			.populate("categories", "_id category urlImgCategories")
			.populate("menus", "_id name description price imgMenus")
			.populate("comments", "_id userId comment ratting");

		const formattedResponse = {
			...responseUpdate.toObject(),
			categories: responseUpdate.categories.map(category => ({
				_id: category._id,
				category: category.category,
				urlImgCategories: category.urlImgCategories,
			})),
			menus: responseUpdate.menus.map(menu => ({
				_id: menu._id,
				name: menu.name,
				description: menu.description,
				price: menu.price,
				imgMenus: menu.imgMenus,
			})),
			comments: responseUpdate.comments.map(comment => ({
				_id: comment._id,
				userId: comment.userId,
				comment,
				ratting: comment.ratting,
			})),
		};

		console.log("SERVICE UPDATE RESTAURANT:", formattedResponse);
		return formattedResponse;

		// const responseUpdate = await RestaurantModel.findOneAndUpdate({ _id: id }, data, { new: true });
		// console.log("SERVICE UPDATE RESTAURANT:", responseUpdate);
		// return responseUpdate;
	},

	async removeRestaurant(id) {
		const responseRemove = await RestaurantModel.deleteOne({ _id: id });
		console.log("SERVICE REMOVE RESTAURANT:", responseRemove);
		return responseRemove;
	},
};

export default RestaurantService;
