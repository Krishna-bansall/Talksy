import mongoose, { Schema } from "mongoose";

const refreshToken = new Schema(
	{
		token: { type: String, required: true },
		uid: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Refresh", refreshToken, "tokens");
