import { check, validationResult } from "express-validator";
import { RestaurantModel } from "../models/index.js";

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ errors: error.array() });
	}
};

const restaurantValidation = {
	// Valida petición GET.
	getAll: [],

	// Valida petición GET BY ID.
	getOne: [],

	// Valida petición POST
	create: [
		check("name")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("El nombre es requerido y debe ser un texto")
			.custom(async value => {
				const restaurant = await RestaurantModel.findOne({ name: value });
				if (restaurant) {
					throw new Error("El nombre del restaurante ya existe");
				}
				return true;
			}),
		check("categories")
			.exists()
			.notEmpty()
			.isArray()
			.withMessage("Las categorías son requeridas y deben ser un Array")
			.custom(value => value.every(categoryId => typeof categoryId === "string")),
		check("description")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("La descripción es requerida y debe ser un texto"),
		check("phone")
			.exists()
			.isString()
			.notEmpty()
			.matches(/^(\+\d{1,3})?\d{6,}$/)
			.withMessage(
				"El número de teléfono es requerido y debe ser un número de teléfono móvil válido"
			)
			.custom(async value => {
				const restaurant = await RestaurantModel.findOne({ phone: value });
				if (restaurant) {
					throw new Error("El número de teléfono ya está registrado para otro restaurante");
				}
				return true;
			}),
		check("email")
			.exists()
			.notEmpty()
			.isEmail()
			.withMessage(
				"El correo electrónico es requerido y debe ser una dirección de correo electrónico válida"
			)
			.custom(async value => {
				const restaurant = await RestaurantModel.findOne({ email: value });
				if (restaurant) {
					throw new Error("El correo electrónico ya está registrado para otro restaurante");
				}
				return true;
			}),
		check("address").custom(async value => {
			const { street, city, country } = value;
			const restaurant = await RestaurantModel.findOne({
				"address.street": street,
				"address.city": city,
				"address.country": country,
			});
			if (restaurant) {
				throw new Error("Ya existe un restaurante con la misma dirección");
			}
			return true;
		}),
		check("address.street")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("La dirección de la calle es requerida y debe ser un texto"),
		check("address.city")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("La ciudad es requerida y debe ser un texto"),
		check("address.state")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("El estado es requerido y debe ser un texto"),
		check("address.country")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("El país es requerido y debe ser un texto"),
		check("imgBrand")
			.exists()
			.notEmpty()
			.isURL()
			.withMessage("La URL de la imagen es requerida y debe ser una URL válida"),
		check("isOpen")
			.exists()
			.notEmpty()
			.isBoolean()
			.withMessage("IsOpen debe ser un valor booleano"),
		check("stars")
			.exists()
			.notEmpty()
			.isNumeric()
			.withMessage("Las estrellas deben ser un valor numérico"),
		check("totalRatings")
			.exists()
			.notEmpty()
			.isNumeric()
			.withMessage("TotalRatings debe ser un valor numérico"),
		check("hours.*.day")
			.exists()
			.notEmpty()
			.isString()
			.withMessage("El nombre del día es requerido y debe ser un texto")
			.custom((value, { req }) => {
				const days = req.body.hours.map(day => day.day);
				const isDuplicate = days.some((day, index) => days.indexOf(day) !== index);
				if (isDuplicate) {
					throw new Error("No se permiten nombres de días duplicados");
				}
				return true;
			}),
		(req, res, next) => validateResult(req, res, next),
	],

	// Valida petición PUT
	update: [],

	// Valida petición DELETE
	delete: [],
};

export default restaurantValidation;

// .matches(/^\+?\d+$/)
// .custom(value => {
// 	// Expresión regular para aceptar números de teléfono con diferentes formatos
// 	const phoneRegex = /^(\+\d{1,3})?\d{6,}$/;
// 	if (!phoneRegex.test(value)) {
// 		throw new Error("El número de teléfono no es válido");
// 	}
// 	return true;
// })
