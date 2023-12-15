import { check, validationResult } from "express-validator";
import { MenuModel } from "../models/index.js";

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
		check("image").exists().isArray().withMessage("La imagen es requerida y debe ser un arreglo"),
		check("dietaryInfo")
			.exists()
			.isArray()
			.withMessage("La información dietética es requerida y debe ser un arreglo")
			.custom(values => {
				// Validación personalizada adicional para los valores actualizados de dietaryInfo si es necesario.
				return true;
			}),
		check("hours.weekdays")
			.exists()
			.notEmpty()
			.withMessage("Se requieren las horas de los días laborables"),
		check("hours.weekends")
			.exists()
			.notEmpty()
			.withMessage("Se requieren las horas de los fines de semana"),
		check("rating").optional().isNumeric().withMessage("La calificación debe ser un número"),
		check("comments").optional().isArray().withMessage("Los comentarios deben ser un arreglo"),
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
		check("dietaryInfo")
			.optional()
			.isArray()
			.withMessage("La información dietética actualizada debe ser un arreglo")
			.custom(values => {
				// Validación personalizada adicional para los valores actualizados de dietaryInfo si es necesario
				return true;
			}),
		check("hours.weekdays")
			.optional()
			.notEmpty()
			.withMessage("Las horas laborables actualizadas son requeridas"),
		check("hours.weekends")
			.optional()
			.notEmpty()
			.withMessage("Las horas de fin de semana actualizadas son requeridas"),
		check("rating")
			.optional()
			.isNumeric()
			.withMessage("La calificación actualizada debe ser un número"),
		check("comments")
			.optional()
			.isArray()
			.withMessage("Los comentarios actualizados deben ser un arreglo"),
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

	// Validación personalizada para verificar si ya existe un menú con el nombre proporcionado
	checkNameExists: async (req, res, next) => {
		const { name } = req.body;
		try {
			const existingMenu = await MenuModel.findOne({ name });
			if (existingMenu) {
				return res.status(400).json({ error: "Ya existe un menú con este nombre" });
			}
			next();
		} catch (error) {
			res.status(500).json({ error: "Error interno del servidor" });
		}
	},
};

export default menuValidation;
