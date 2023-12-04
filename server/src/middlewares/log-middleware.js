// Middleware que muestra por consola desde que cliente están llegando las peticiones HTTP.
const logs = async (req, res, next) => {
	const headers = req.headers;
	const userAgent = headers["user-agent"];
	console.log(`🛎️  Request from: ${userAgent}`);
	next();
};

export { logs };
