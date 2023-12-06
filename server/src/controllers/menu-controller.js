import { MenuService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const MenuController = {
	async getMenus(req, res) {
		try {
			const response = await MenuService.getAllMenus();
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_MENUS", e);
		}
	},

	async getMenu(req, res) {
		const { id } = req.params;
		try {
			const response = await MenuService.getMenuById(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_MENU", e);
		}
	},

	async postMenu({ body }, res) {
		try {
			const response = await MenuService.createMenu(body);
			return res.status(201).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_POST_MENU", e);
		}
	},

	async putMenu(req, res) {
		try {
			const { id } = req.params;
			const body = req.body;
			const response = await MenuService.updateMenu(id, body);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_PUT_MENU", e);
		}
	},

	async deleteMenu(req, res) {
		try {
			const { id } = req.params;
			const response = await MenuService.removeMenu(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_DELETE_MENU", e);
		}
	},
};

export default MenuController;
