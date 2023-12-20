import { check, validationResult } from "express-validator";
// import { MenuModel } from "../models/index.js";

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ errors: error.array().map(err => ({ msg: err.msg })) });
	}
};

const menuValidation = {
	// Validación para crear un menú
	create: [
		check("name")
			.exists()
			.notEmpty()
			.withMessage("El nombre del menú es requerido y debe ser texto"),
		check("description").exists().notEmpty().withMessage("La descripción del menú es requerida"),
		check("price").exists().isNumeric().withMessage("El precio es requerido y debe ser un número"),
		check("imgMenus")
			.exists()
			.isArray()
			.withMessage("La imagen es requerida y debe estar dentro de un arreglo"),
		check("menuCategory")
			.exists()
			.isArray()
			.withMessage("La información dietética es requerida y debe ser un arreglo")
			.custom(values => {
				// Validación personalizada adicional para los valores actualizados de dietaryInfo si es necesario.
				return true;
			}),
		(req, res, next) => validateResult(req, res, next),
	],

	// Validación para actualizar un menú
	update: [
		check("name")
			.optional()
			.notEmpty()
			.withMessage("El nombre actualizado del menú debe ser texto"),
		check("description")
			.optional()
			.notEmpty()
			.withMessage("La descripción actualizada del menú es requerida"),
		check("price").optional().isNumeric().withMessage("El precio actualizado debe ser un número"),
		check("image").optional().isArray().withMessage("La imagen actualizada debe ser un arreglo"),
		check("menuCategory")
			.optional()
			.isArray()
			.withMessage("La información dietética actualizada debe ser un arreglo")
			.custom(values => {
				return true;
			}),
		(req, res, next) => validateResult(req, res, next),
	],

	// Validación para borrar un menú
	delete: [
		check("id")
			.exists()
			.isMongoId()
			.withMessage("Se requiere el ID del menú y debe ser un ID de MongoDB válido"),
		(req, res, next) => validateResult(req, res, next),
	],
};

export default menuValidation;
