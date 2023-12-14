import { check, validationResult } from "express-validator";
import { CategoryModel } from "../models/index.js";

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ erros: error.array() });
	}
};

const categoryValidation = {
	// Valida peticiones GET
	getAll: [],
	// Valida peticiones GET BY ID
	getOne: [],

	// Valida peticiones POST
	create: [
		check("category")
			.exists()
			.notEmpty()
			.withMessage("El nombre de la categoría es requerido y debe ser texto")
			.custom(async value => {
				const category = await CategoryModel.findOne({ category: value });
				if (category) {
					throw new Error("El nombre de la categoría ya existe");
				}
				return true;
			}),
		check("urlImgCategories")
			.exists()
			.notEmpty()
			.withMessage("La imagen es requerida")
			.isURL()
			.withMessage("La imagen debe ser una URL valida"),
		(req, res, next) => validateResult(req, res, next),
	],

	// Valida petición PUT
	update: [],
	// Valida petición DELETE
	delete: [],
};

export default categoryValidation;
