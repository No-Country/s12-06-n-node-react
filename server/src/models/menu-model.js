import { Schema, model } from "mongoose";

const menuSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: [String],
			required: true,
		},
		dietaryInfo: {
			type: [String],
			required: true,
			enum: ["Vegan", "Vegetarian", "Other Dietary Preferences"],
		},
		hours: {
			weekdays: {
				type: String,
				required: true,
			},
			weekends: {
				type: String,
				required: true,
			},
		},
		rating: {
			type: Number,
			default: 0,
		},
		comments: [
			{
				user: {
					type: String,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
				rating: {
					type: Number,
					required: true,
				},
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

const MenuModel = model("menus", menuSchema);

export default MenuModel;
