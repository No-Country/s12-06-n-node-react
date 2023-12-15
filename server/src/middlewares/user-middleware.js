import { check, validationResult, param } from "express-validator";
import { UserModel, RestaurantModel } from "../models/index.js";

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ errors: error.array() });
	}
};

const userValidation = {
	register: [
		check("name")
			.exists()
			.notEmpty()
			.withMessage("El nombre es requerido")
			.isLength({ min: 3 })
			.withMessage("El nombre debe tener al menos 3 caracteres"),
		check("surname")
			.exists()
			.notEmpty()
			.withMessage("El apellido es requerido")
			.isLength({ min: 3 })
			.withMessage("El apellido debe tener al menos 3 caracteres"),
		check("email")
			.exists()
			.notEmpty()
			.withMessage("El email es requerido")
			.isEmail()
			.withMessage("El email debe ser válido")
			.custom(async value => {
				try {
					const user = await UserModel.findOne({ email: value });
					if (user) {
						throw new Error("El email ya está registrado");
					}
					return true;
				} catch (error) {
					throw new Error(`Error al validar el email: ${error.message}`);
				}
			}),
		check("password")
			.exists()
			.notEmpty()
			.withMessage("La contraseña es requerida")
			.isLength({ min: 8 })
			.withMessage("La contraseña debe tener al menos 8 caracteres"),
		check("address.street").exists().notEmpty().withMessage("La calle es requerida"),
		check("address.city").exists().notEmpty().withMessage("La ciudad es requerida"),
		check("address.state").exists().notEmpty().withMessage("La provincia es requerida"),
		check("phone").exists().notEmpty().withMessage("El teléfono es requerido"),
		check("img").optional().notEmpty().withMessage("La imagen es requerida"),
		check("admin")
			.exists()
			.notEmpty()
			.withMessage("El rol es requerido")
			.isBoolean()
			.withMessage("El rol debe ser un booleano"),
		check("favorites")
			.optional()
			.isArray()
			.withMessage("Los favoritos deben ser un array")
			.custom(value => {
				if (value.length === 0) {
					throw new Error("Debe haber al menos un favorito");
				}
				return true;
			}),
		check("restaurants")
			.optional()
			.isArray()
			.withMessage("Los restaurantes deben ser un array")
			.custom(value => {
				if (value.length === 0) {
					throw new Error("Debe haber al menos un restaurante");
				}
				return true;
			}),
		(req, res, next) => validateResult(req, res, next),
	],
	addRestaurant: [
		param("id")
			.exists()
			.notEmpty()
			.withMessage("El user id es requerido")
			.isLength({ min: 24, max: 24 })
			.withMessage("El id no es valido")
			.custom(async value => {
				try {
					const user = await UserModel.findById(value);
					if (!user) {
						throw new Error("El usuario no existe");
					}
					return true;
				} catch (error) {
					throw new Error(`Error al validar el usuario: ${error.message}`);
				}
			}),
		check("restaurants")
			.optional()
			.isArray()
			.withMessage("Los restaurantes deben ser un array")
			.custom(value => {
				if (value.length === 0) {
					throw new Error("Debe haber al menos un restaurante");
				}
				return true;
			}),
		check("restaurants.*")
			.exists()
			.notEmpty()
			.withMessage("El id del restaurante es requerido")
			.isLength({ min: 24, max: 24 })
			.withMessage("El id no es valido")
			.custom(async (value, { req }) => {
				try {
					const success = await RestaurantModel.findById(value);
					if (!success) {
						throw new Error("restaurante no existe");
					}
					const id = req.params.id;
					const user = await UserModel.findById(id);

					if (!user) {
						throw new Error("El usuario no existe");
					}

					const restaurants = user.restaurants;
					for (let i = 0; i < restaurants.length; i++) {
						const restaurantId = restaurants[i];

						if (restaurantId === value) {
							throw new Error("El restaurante ya está agregado");
						}
					}

					return true;
				} catch (error) {
					throw new Error(`Error al validar el restaurante: ${error.message}`);
				}
			}),
		(req, res, next) => validateResult(req, res, next),
	],
	login: [],
};

export default userValidation;
