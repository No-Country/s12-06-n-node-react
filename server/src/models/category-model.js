import { Schema, model } from "mongoose";

const categorySchema = new Schema(
	{
		category: {
			type: String,
			require: true,
		},
		urlImgCategories: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const CategoryModel = model("categories", categorySchema);

export default CategoryModel;
