import { Schema, model } from "mongoose";

const commentSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "users",
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
			enum: [1, 2, 3, 4, 5],
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const CommentModel = model("comments", commentSchema);

export default CommentModel;
