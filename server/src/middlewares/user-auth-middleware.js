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
}

const authValidation = {
    login: [
        check("email")
            .exists().withMessage("El email es requerido")
            .notEmpty().withMessage("El email no puede estar vacío")
            .isEmail().withMessage("El email debe ser válido")
            .custom(async value => {
                try {
                    const user = await UserModel.findOne({ email: value });

                    if (!user) {
                        throw new Error("Email o contraseña incorrecto");
                    }

                    return true;
                } catch (error) {
                    throw new Error(`Error al validar el email: ${error.message}`);
                }
            }),
        check("password")
            .exists().withMessage("La contraseña es requerida")
            .notEmpty().withMessage("La contraseña no puede estar vacía")
            .withMessage("La contraseña es requerida")
            .custom(async (value, { req }) => {
                try{
                    const userEmail = req.body.email;
                    const password = value;

                    const user = await UserModel.findOne({ email: userEmail });
                    
                    const result = bcrypt.compareSync(password, user.password);

                    if(!result){
                        throw new Error("Email o contraseña incorrecto");
                    }

                    return true;
                }catch(error){
                    throw new Error(`Error al validar la contraseña: ${error.message}`);
                }
            }),
        (req, res, next) => validateResult(req, res, next),
    ],
};

export default authValidation;