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
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: false,
		},
		password: {
			type: String,
			required: true,
		},
		address: {
			street: {
				type: String,
				required: false,
			},
			city: {
				type: String,
				required: false,
			},
			state: {
				type: String,
				required: false,
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
