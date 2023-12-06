import mongoose from "mongoose";
import "dotenv/config.js";

const dbConnect = async () => {
	try {
		const DB_URI = process.env.MONGO_DB_URI;

		await mongoose.connect(DB_URI);
		console.log("📡 Connect to MongoDB successful");
	} catch (error) {
		throw new Error("Error to connect mongoDB:", error.message);
	}
};

export default dbConnect;
