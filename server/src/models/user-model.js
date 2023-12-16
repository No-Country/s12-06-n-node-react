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
			default: "",
		},
		password: {
			type: String,
			required: true,
		},
		address: {
			street: {
				type: String,
				required: false,
				default: "",
			},
			city: {
				type: String,
				required: false,
				default: "",
			},
			state: {
				type: String,
				required: false,
				default: "",
			},
		},
		phone: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: false,
			default: "",
		},
		admin: {
			type: Boolean,
			required: false,
			default: false,
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
