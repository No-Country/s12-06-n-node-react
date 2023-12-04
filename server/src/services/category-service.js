import { CategoryModel } from "../models/index.js";

const CategoryService = {
	async getAllCategories() {
		const responseGetAll = await CategoryModel.find();
		console.log("SERVICE GET CATEGORIES", responseGetAll);
		return responseGetAll;
	},

	async getCategoryById(id) {
		const responseGetById = await CategoryModel.findById(id);
		console.log("SERVICE GET CATEGORY", responseGetById);
		return responseGetById;
	},

	async createCategory(body) {
		const responseInsert = await CategoryModel.create(body);
		console.log("SERVICE CREATE CATEGORY", responseInsert);
		return responseInsert;
	},

	async updateCategory(id, data) {
		const responseUpdate = await CategoryModel.findOneAndUpdate({ _id: id }, data, { new: true });
		console.log("SERVICE UPDATE CATEGORY", responseUpdate);
		return responseUpdate;
	},

	async removeCategory(id) {
		const responseRemove = await CategoryModel.deleteOne({ _id: id });
		console.log("SERVICE DELETE CATEGORY", responseRemove);
		return responseRemove;
	},
};

export default CategoryService;
