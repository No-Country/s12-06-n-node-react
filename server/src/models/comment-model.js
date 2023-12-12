import { Schema, model } from "mongoose";

const commentSchema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		restaurantId: {
			type: Schema.Types.ObjectId,
			ref: "restaurants",
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
	{ timestamps: true, versionKey: false }
);

const CommentModel = model("comments", commentSchema);

export default CommentModel;
