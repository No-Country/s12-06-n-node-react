import jwt from "jsonwebtoken";

const tokenValidation = (req, res, next) => {
	const token = req.header("x-access-token");
	if (!token) return res.status(401).json({ message: "No token provided" });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.id = decoded.id;
		req.name = decoded.name;
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(401).json({ message: "Token expired" });
		}
		if (error instanceof jwt.JsonWebTokenError) {
			return res.status(401).json({ message: "Invalid token" });
		}
		return res.status(401).json({ message: "Unauthorized" });
	}
	next();
};

export default tokenValidation;
