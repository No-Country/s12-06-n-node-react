import jwt from "jsonwebtoken";
import { UserModel } from "../models/index.js";

const authValidation = async (req, res, next) => {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res.status(401).json({ message: "No se ha enviado el token" });
	}

	const [bearer, token] = authorizationHeader.split(" ");

	if (bearer !== "Bearer" || !token) {
		return res.status(401).json({ message: "El formato del token no es válido" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await UserModel.findById(decoded.sub);
		if (!user) {
			return res.status(401).json({ message: `Usuario inválido` });
		}

		req.body.userId = decoded.sub;
		req.body.admin = decoded.admin;

		next();
	} catch (error) {
		return res.status(500).json({ message: "El token no es válido" });
	}
};

export default authValidation;
