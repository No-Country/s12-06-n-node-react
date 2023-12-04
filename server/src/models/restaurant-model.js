import mongoose from "mongoose";

// Se define un schema de restaurant
const restaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	url_img_restaurant: {
		type: String,
		required: true,
	},
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
console.log("MODEL RESTAURANT GET ALL:", RestaurantModel);
export default RestaurantModel;
