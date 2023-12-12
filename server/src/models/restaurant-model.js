import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: "categories",
			},
		],
		phone: {
			type: String,
			required: true,
			unique: true,
			// match: /^\+(?:[0-9]*?){6,14}[0-9]$/,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			// match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
		hours: [
			{
				day: {
					type: String,
					enum: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
						"Holidays",
					],
					required: true,
				},
				openingTime: {
					type: String,
					required: true,
				},
				closingTime: {
					type: String,
					required: true,
				},
				_id: false,
			},
		],
		stars: {
			type: Number,
			default: 0,
		},
		totalRatings: {
			type: Number,
			default: 0,
		},
		menus: [
			{
				type: Schema.Types.ObjectId,
				ref: "menus",
			},
		],
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: "comments",
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

const RestaurantModel = model("restaurants", restaurantSchema);

export default RestaurantModel;
