import jwt from "jsonwebtoken";
import { UserModel } from "../models/index.js";

const authValidation = async (req, res, next) => {
    const authorization = req.headers.authorization;
    
    if (!authorization) {
        return res.status(401).json({ message: "No se ha enviado el token" });
    }

    if (!authorization.startsWith("Bearer")) {
        return res.status(401).json({ message: "El token no es válido" });
    }
    
    try {
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "El usuario no valido" });
        }
           
        req.sub = decoded.id;
        req.admin = decoded.admin;

        next();

    } catch (error) {
        return res.status(500).json({ message: "El token no es válido" });
    }
};

export default authValidation;