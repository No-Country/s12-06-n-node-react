import "dotenv/config.js";
import mongoose from "mongoose";

const dbConnect = async () => {
	try {
		const DB_URI = process.env.MONGO_DB_URI;
		await mongoose.connect(DB_URI);
		console.log("DB connect successful");
	} catch (error) {
		throw new Error("Error to connect mongoDB:", error.message);
	}
};

export default dbConnect;
