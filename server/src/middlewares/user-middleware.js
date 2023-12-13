import { check, validateResult } from "express-validator";
import { UserModel } from "../models/index.js";

const validationResult = (req, res, next) => {
    try {
        validateResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({ errors: error.array() });
    }
};

const userValidation = {
    registerUser: [
        check("name")
            .exists()
            .notEmpty().withMessage("El nombre es requerido")
            .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
        check("surname")
            .exists()
            .notEmpty().withMessage("El apellido es requerido")
            .isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres"),
        check("email")
            .exists()
            .notEmpty().withMessage("El email es requerido")
            .isEmail().withMessage("El email debe ser válido")
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
            .notEmpty().withMessage("La contraseña es requerida")
            .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
        check("address.street")
            .exists()
            .notEmpty().withMessage("La calle es requerida"),
        check("address.city")
            .exists()
            .notEmpty().withMessage("La ciudad es requerida"),
        check("address.state")
            .exists()
            .notEmpty().withMessage("La provincia es requerida"),
        check("phone")
            .exists()
            .notEmpty().withMessage("El teléfono es requerido"),
        check("favorites")
            .optional()
            .isArray().withMessage("Los favoritos deben ser un array")
            .custom(value => {
                if (value.length === 0) {
                    throw new Error("Debe haber al menos un favorito");
                }
                return true;
            }),
        check("restaurant")
            .optional()
            .isArray().withMessage("Los restaurantes deben ser un array")
            .custom(value => {
                if (value.length === 0) {
                    throw new Error("Debe haber al menos un restaurante");
                }
                return true;
            }),
        (req, res, next) => validationResult(req, res, next),
        
    ],
};

export default userValidation;