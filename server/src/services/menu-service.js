import { MenuModel } from "../models/index.js";

const MenuService = {
	async getAllMenus() {
		const responseGetAll = await MenuModel.find();
		console.log("SERVICE GET MENUS:", responseGetAll);
		return responseGetAll;
	},

	async getMenuById(id) {
		const responseGetById = await MenuModel.findById(id);
		console.log("SERVICE GET MENU:", responseGetById);
		return responseGetById;
	},

	async createMenu(body) {
		const responseInsert = await MenuModel.create(body);
		console.log("SERVICE CREATE MENU:", responseInsert);
		return responseInsert;
	},

	async updateMenu(id, data) {
		const responseUpdate = await MenuModel.findOneAndUpdate({ _id: id }, data, { new: true });
		console.log("SERVICE UPDATE MENU:", responseUpdate);
		return responseUpdate;
	},

	async removeMenu(id) {
		const responseRemove = await MenuModel.deleteOne({ _id: id });
		console.log("SERVICE REMOVE MENU:", responseRemove);
		return responseRemove;
	},
};

export default MenuService;
