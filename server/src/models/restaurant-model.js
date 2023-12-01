import mongoose from "mongoose";

// Se define un schema de restaurant
const restaurant = new mongoose.Schema({
	name: String,
	type: String,
	description: String,
	phone: String,
	address: String,
	img_logo: String,
});

/**
 * Se define un modelo Restaurant utilizando buenas practicas de mongoose.
 * Se mapea el schema restaurant en la collection restaurants de mongoDB en Atlas.
 */
const Restaurant = mongoose.model("Restaurant", restaurant);

export default Restaurant;
