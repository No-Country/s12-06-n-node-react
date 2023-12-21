import { MenuService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const MenuController = {
	// Obtener todos los menús disponibles
	async getMenus(req, res) {
		try {
			const response = await MenuService.getAllMenus();
			return res.status(200).json(response);
		} catch (e) {
			// Manejar error al obtener menús
			handleHttp(res, "ERROR_GET_MENUS", e);
		}
	},

	// Obtener información detallada de un menú por su ID
	async getMenu(req, res) {
		const { id } = req.params;
		try {
			const response = await MenuService.getMenuById(id);
			return res.status(200).json(response);
		} catch (e) {
			// Manejar error al obtener un menú específico
			handleHttp(res, "ERROR_GET_MENU", e);
		}
	},

	// Crear un nuevo menú en la base de datos
	async postMenu({ body }, res) {
		try {
			const response = await MenuService.createMenu(body);
			return res.status(201).json(response);
		} catch (e) {
			// Manejar error al crear un nuevo menú
			handleHttp(res, "ERROR_POST_MENU", e);
		}
	},

	// Actualizar información de un menú existente
	async putMenu(req, res) {
		try {
			const { id } = req.params;
			const body = req.body;

			const response = await MenuService.updateMenu(id, body);
			return res.status(200).json(response);
		} catch (e) {
			// Manejar error al actualizar un menú
			handleHttp(res, "ERROR_PUT_MENU", e);
		}
	},

	// Eliminar un menú por su ID
	async deleteMenu(req, res) {
		try {
			const { id } = req.params;
			const response = await MenuService.removeMenu(id);
			return res.status(200).json(response);
		} catch (e) {
			// Manejar error al eliminar un menú
			handleHttp(res, "ERROR_DELETE_MENU", e);
		}
	},
};

export default MenuController;
