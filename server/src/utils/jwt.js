import jwt from "jsonwebtoken";

const generateToken = body => {
	return new Promise((resolve, reject) => {
		const { id: sub, username, admin } = body;

		const payload = {
			sub,
			username,
			admin,
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN },
			(err, token) => {
				if (err) reject(err);
				resolve(token);
			}
		);
	});
};

export default generateToken;
