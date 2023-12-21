import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const restaurantSchema = new Schema(
	{
		name: {
			type: String,
			// unique: true,
			// required: true,
		},
		description: {
			type: String,
			// required: true,
		},
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: "categories",
			},
		],
		phone: {
			type: String,
			// required: true,
			// unique: true,
		},
		email: {
			type: String,
			// required: true,
			// unique: true,
		},
		address: {
			street: {
				type: String,
				// required: true,
			},
			city: {
				type: String,
				// required: true,
			},
			state: {
				type: String,
				// required: true,
			},
			country: {
				type: String,
				// required: true,
			},
		},
		imgBrand: {
			type: String,
			// required: true,
		},
		isOpen: {
			type: Boolean,
			default: true,
			// required: true,
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
					// required: true,
				},
				openingTime: {
					type: String,
					// required: true,
				},
				closingTime: {
					type: String,
					// required: true,
				},
				_id: false,
			},
		],
		rating: {
			average: {
				type: Number,
				default: 0,
			},
			total: {
				type: Number,
				default: 0,
			},
			total_per_starts: {
				type: [Number],
				default: [0, 0, 0, 0, 0],
			},
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

restaurantSchema.plugin(mongoosePaginate);
const RestaurantModel = model("restaurants", restaurantSchema);

export default RestaurantModel;
