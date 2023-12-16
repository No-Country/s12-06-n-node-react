import { check, validationResult } from "express-validator";
import { UserModel } from "../models/index.js";
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

const authValidation = {
	login: [
		check("username")
			.exists()
			.withMessage("El username es requerido")
			.notEmpty()
			.withMessage("El username no puede estar vacío")
			.custom(async value => {
				try {
					const user = await UserModel.findOne({ username: value });

					if (!user) {
						throw new Error("username o contraseña incorrecto");
					}

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
};

export default authValidation;
