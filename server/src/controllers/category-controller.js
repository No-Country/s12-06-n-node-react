import { CategoryService } from "../services/index.js";
import { handleHttp } from "../utils/error-handle.js";

const CategoryController = {
	async getCategories(req, res) {
		try {
			const response = await CategoryService.getAllCategories();
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_CATEGORIES", e);
		}
	},

	async getCategory(req, res) {
		const { id } = req.params;
		try {
			const response = await CategoryService.getCategoryById(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_GET_CATEGORY", e);
		}
	},

	async postCategory({ body }, res) {
		try {
			const response = await CategoryService.createCategory(body);
			return res.status(201).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_POST_CATEGORY", e);
		}
	},

	async putCategory(req, res) {
		try {
			const { id } = req.params;
			const body = req.body;
			const response = await CategoryService.updateCategory(id, body);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_PUT_CATEGORY", e);
		}
	},

	async deleteCategory(req, res) {
		try {
			const { id } = req.params;
			const response = await CategoryService.removeCategory(id);
			return res.status(200).json(response);
		} catch (e) {
			handleHttp(res, "ERROR_DELETE_CATEGORY", e);
		}
	},
};

export default CategoryController;
