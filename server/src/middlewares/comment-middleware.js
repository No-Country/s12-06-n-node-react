import { check, validationResult, param } from "express-validator";
import { CommentModel, RestaurantModel } from "../models/index.js";

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
	getRestaurantComments: [ // obtiene los comentarios de un restaurante por id
		param("RestaurantId")
			.exists().withMessage("El id del restaurante es requerido")
			.notEmpty().withMessage("El id del restaurante no puede estar vacío")
			.custom(async (value, { req }) => {
				try {
					const restaurant = await RestaurantModel.findOne({ _id: value });
					if (!restaurant) {
					  throw new Error("No existe el restaurante");
					};

					const comments = await CommentModel.find({ restaurantId: value });
					if (comments.length === 0) {
						throw new Error("No existen comentarios para este restaurante");
					};

					return true;
				} catch (error) {
					throw new Error(`Error al validar el id del restaurante: ${error.message}`);
				}
			}),
		(req, res, next) => validateResult(req, res, next),
	],
	getAll: [],
	create: [
		check("userId") // validar si el id existe en la bd
			.exists()
			.notEmpty()
			.withMessage("El id del usuario es requerido"),
		check("restaurantId") // validar si existe id en bd
			.exists()
			.notEmpty()
			.withMessage("El id del restaurante es requerido"),
		check("comment")
			.exists()
			.notEmpty()
			.withMessage("El comentario es requerido"),
		check("rating")
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
		param("UserId")
			.exists()
			.notEmpty()
			.withMessage("El id del usuario es requerido"),
		param("CommentId")
			.exists()
			.notEmpty().withMessage("El id del comentario es requerido")
			.custom(async (value, { req }) => {
				const comment = await CommentModel.findOne({ _id: value });
				if (!comment) {
					throw new Error("No existe el comentario");
				};

				return true;
			}),
		check("comment")
			.exists()
			.notEmpty().withMessage("El comentario es requerido"),		
		(req, res, next) => validateResult(req, res, next),
	],
	delete: [
		param("UserId")
			.exists()
			.notEmpty()
			.withMessage("El id del usuario es requerido"),
		param("CommentId")
			.exists()
			.notEmpty().withMessage("El id del comentario es requerido")
			.custom(async (value, { req }) => {
				const comment = await CommentModel.findById(value);
				if (!comment) {
					throw new Error("No existe el comentario");
				};

				return true;
			}),
		(req, res, next) => validateResult(req, res, next),
	],
};

export default commentValidation;