import { check, validationResult, param } from "express-validator";
import { UserModel, RestaurantModel } from "../models/index.js";
import bcrypt from "bcryptjs";

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
		check("username")
			.exists()
			.notEmpty()
			.withMessage("El nombre de usuario es requerido")
			.custom(async value => {
				try {
					const user = await UserModel.findOne({ username: value });
					if (user) {
						throw new Error("El nombre de usuario ya está registrado");
					}
					return true;
				} catch (error) {
					throw new Error(`Error al validar el nombre de usuario: ${error.message}`);
				}
			}),
		check("email")
			.optional()
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
			.withMessage("La contraseña debe tener al menos 8 caracteres")
			.custom(async value => {
				try {
					const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

					if (!regex.test(value)) {
						throw new Error(
							"La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial, y ser de al menos 8 caracteres de longitud."
						);
					}

					return true;
				} catch (error) {
					throw new Error(`Error al validar la contraseña: ${error.message}`);
				}
			}),
		check("address.street").optional().exists().notEmpty().withMessage("La calle es requerida"),
		check("address.city").optional().exists().notEmpty().withMessage("La ciudad es requerida"),
		check("address.state").optional().exists().notEmpty().withMessage("La provincia es requerida"),
		check("phone").exists().notEmpty().withMessage("El teléfono es requerido"),
		check("img").optional().notEmpty().withMessage("La imagen es requerida"),
		check("admin")
			.optional()
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
	login: [
		check("username")
			.exists()
			.withMessage("El username es requerido")
			.notEmpty()
			.withMessage("El username no puede estar vacío")
			.custom(async (value, { req }) => {
				try {
					const user = await UserModel.findOne({ username: value });

					if (!user) {
						throw new Error("username o contraseña incorrecto");
					}

					req.body.id = user._id;
					req.body.admin = user.admin;
					req.body.name = user.name;
					req.body.surname = user.surname;

					return true;
				} catch (error) {
					throw new Error(`Error al validar el username: ${error.message}`);
				}
			}),
		check("password")
			.exists()
			.withMessage("La contraseña es requerida")
			.notEmpty()
			.withMessage("La contraseña no puede estar vacía")
			.withMessage("La contraseña es requerida")
			.custom(async (value, { req }) => {
				try {
					const username = req.body.username;
					const password = value;

					const user = await UserModel.findOne({ username });

					const result = bcrypt.compareSync(password, user.password);

					if (!result) {
						throw new Error("username o contraseña incorrecto");
					}

					return true;
				} catch (error) {
					throw new Error(`Error al validar la contraseña: ${error.message}`);
				}
			}),
		(req, res, next) => validateResult(req, res, next),
	],
	update: [
		param("id")
			.exists()
			.withMessage("El id es requerido")
			.notEmpty()
			.withMessage("El id no puede estar vacío")
			.isLength({ min: 24, max: 24 })
			.withMessage("El id no es válido")
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
		check("name")
			.optional()
			.notEmpty()
			.withMessage("El nombre no puede estar vacío")
			.isLength({ min: 3 })
			.withMessage("El nombre debe tener al menos 3 caracteres"),
		check("surname")
			.optional()
			.notEmpty()
			.withMessage("El apellido no puede estar vacío")
			.isLength({ min: 3 })
			.withMessage("El apellido debe tener al menos 3 caracteres"),
		check("username")
			.optional()
			.notEmpty()
			.withMessage("El nombre de usuario es requerido")
			.custom(async value => {
				try {
					const user = await UserModel.findOne({ username: value });
					if (user) {
						throw new Error("El nombre de usuario ya está registrado");
					}
					return true;
				} catch (error) {
					throw new Error(`Error al validar el nombre de usuario: ${error.message}`);
				}
			}),
		check("email")
			.optional()
			.notEmpty()
			.withMessage("El email no puede estar vacío")
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
		check("address.street").optional().notEmpty().withMessage("La calle no puede estar vacía"),
		check("address.city").optional().notEmpty().withMessage("La ciudad es no puede estar vacia"),
		check("address.state").optional().notEmpty().withMessage("La provincia no puede estar vacia"),
		check("phone").optional().notEmpty().withMessage("El teléfono no puede estar vacio"),
		check("img").optional().notEmpty().withMessage("La imagen no puede estar vacia"),
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
};

export default userValidation;
