const logMiddleware = async (req, res, next) => {
	console.log("Acá mirando todo 👀");
	next();
};

export { logMiddleware };
