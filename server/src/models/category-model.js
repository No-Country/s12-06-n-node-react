import { Schema, model } from "mongoose";

const categorySchema = new Schema(
	{
		category: {
			type: String,
			required: true,
		},
		urlImgCategories: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const CategoryModel = model("categories", categorySchema);

export default CategoryModel;
