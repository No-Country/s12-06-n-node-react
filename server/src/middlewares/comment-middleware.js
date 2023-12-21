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
	getRestaurantComments: [
		param("RestaurantId")
			.exists()
			.withMessage("El id del restaurante es requerido")
			.notEmpty()
			.withMessage("El id del restaurante no puede estar vacío")
			.custom(async (value, { req }) => {
				try {
					const restaurant = await RestaurantModel.findOne({ _id: value });
					if (!restaurant) {
						throw new Error("No existe el restaurante");
					}

					const comments = await CommentModel.find({ restaurantId: value });
					if (comments.length === 0) {
						throw new Error("No existen comentarios para este restaurante");
					}

					return true;
				} catch (error) {
					throw new Error(`Error al validar el id del restaurante: ${error.message}`);
				}
			}),
		(req, res, next) => validateResult(req, res, next),
	],
	getAll: [],
	create: [
		check("restaurantId")
			.exists()
			.notEmpty()
			.withMessage("El id del restaurante es requerido")
			.custom(async value => {
				try {
					const restaurant = await RestaurantModel.findById(value);
					if (!restaurant) {
						throw new Error("No existe el restaurante");
					}

					return true;
				} catch (error) {
					throw new Error(`Error al validar el id del restaurante: ${error.message}`);
				}
			}),
		check("comment").exists().notEmpty().withMessage("El comentario es requerido"),
		check("rating")
			.exists()
			.notEmpty()
			.isNumeric()
			.custom(value => {
				try {
					if (value < 1 || value > 5) {
						throw new Error("El puntaje debe ser entre 1 y 5");
					}
					return true;
				}catch(error){
					throw new Error(`Error al validar el puntaje: ${error.message}`);
				}
			})
			.withMessage("El puntaje es requerido y debe ser un número"),
		(req, res, next) => validateResult(req, res, next),
	],
	update: [
		param("CommentId")
			.exists()
			.notEmpty()
			.withMessage("El id del comentario es requerido")
			.custom(async (value, { req }) => {
				try{
					const comment = await CommentModel.findOne({ _id: value });
					if (!comment) {
						throw new Error("No existe el comentario");
					}

					return true;
				}catch(error){
					throw new Error(`Error al validar el id del comentario: ${error.message}`);
				}
			}),
		check("userId").notEmpty().withMessage("El id del usuario es requerido")
			.custom(async (value, { req }) => {
				try{
					const comment = await CommentModel.findOne({ _id: req.params.CommentId });
			
					if (String(comment.userId) !== value) {
						throw new Error("No puedes editar un comentario que no es tuyo");
					}

					return true;
				}catch(error){
					throw new Error(`Error al validar el id del usuario: ${error.message}`);
				}
			}),
		check("comment").optional().notEmpty().withMessage("El comentario no puede estar vacío"),
		check("rating").optional().notEmpty().withMessage("El puntaje no puede estar vacío"),
		(req, res, next) => validateResult(req, res, next),
	],
	delete: [
		param("CommentId")
			.exists()
			.notEmpty()
			.withMessage("El id del comentario es requerido")
			.custom(async (value, { req }) => {
				try{
					const comment = await CommentModel.findById(value);
					if (!comment) {
						throw new Error("No existe el comentario");
					}

					return true;
				}catch(error){
					throw new Error(`Error al validar el id del comentario: ${error.message}`);
				}
			}),
		check("userId").notEmpty().withMessage("El id del usuario es requerido")
			.custom(async (value, { req }) => {
				try{
					const comment = await CommentModel.findOne({ _id: req.params.CommentId });
			
					if (String(comment.userId) !== value) {
						throw new Error("No puedes eliminar un comentario que no es tuyo");
					}

					return true;
				}catch(error){
					throw new Error(`Error al validar el id del usuario: ${error.message}`);
				}
			}),
		(req, res, next) => validateResult(req, res, next),
	],
};

export default commentValidation;
