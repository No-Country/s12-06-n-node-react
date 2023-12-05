import { Schema, model } from "mongoose";

const commentSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		comment: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		restaurant_id: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		createdAt: {
			type: Date,
			required: true,
		},
		like: {
			type: Number,
			required: false,
		},
		dislike: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true, versionKey: false }
);

const CommentModel = model("comments", commentSchema);

export default CommentModel;
