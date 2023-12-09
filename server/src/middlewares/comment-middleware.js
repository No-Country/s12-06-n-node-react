import { check, validationResult } from "express-validator";

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ errors: error.array() });
	}
};

const commentValidation = {
	getAll: [],
	getOne: [],
	create: [
		check("userId")
			.exists()
			.notEmpty()
			.withMessage("El id del usuario es requerido"),
		check("restaurantId")
			.exists()
			.notEmpty()
			.withMessage("El id del restaurante es requerido"),
		check("comment")
			.exists()
			.notEmpty()
			.withMessage("El comentario es requerido"),
		check("score")
			.exists()
			.notEmpty()
			.isNumeric()
			.custom((value) => {
				if (value < 0 || value > 5) {
					throw new Error("El puntaje debe ser entre 0 y 5");
				}
				return true;
			})
			.withMessage("El puntaje es requerido y debe ser un número"),
		(req, res, next) => validateResult(req, res, next),
	],	
	update: [
		check("id")
			.exists()
			.notEmpty()
			.withMessage("El id del comentario es requerido"),
		check("comment")
			.exists()
			.notEmpty()
			.withMessage("El comentario es requerido"),
		check("score")
			.exists()
			.notEmpty()
			.isNumeric()
			.withMessage("El puntaje es requerido y debe ser un número"),
	],
	delete: [
		check("id")
			.exists()
			.notEmpty()
			.withMessage("El id del comentario es requerido"),
	],
};

export default { commentValidation };