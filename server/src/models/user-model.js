import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
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
		},
		phone: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: false,
		},
		admin: {
			type: Boolean,
			required: true,
		},
		favorites: {
			type: Array,
			required: false,
		},
		restaurants: {
			type: Array,
			required: false,
		},
	},
	{ timestamps: true, versionKey: false }
);

const UserModel = model("Users", userSchema);
export default UserModel;
