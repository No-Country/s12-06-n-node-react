import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
	{
		name: {
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
			street: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			state: {
				type: String,
				required: true,
			},
			country: {
				type: String,
				required: true,
			},
		},
		imgBrand: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
			default: true,
			required: true,
		},
		stars: {
			type: Number,
			default: 0,
		},
		totalRatings: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true, versionKey: false }
);

const RestaurantModel = model("restaurants", restaurantSchema);

export default RestaurantModel;
