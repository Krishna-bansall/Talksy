import mongoose, { Schema } from "mongoose";

const refreshToken = new Schema(
	{
		token: { type: String, required: true },
		uid: {
			type: Schema.Types.ObjectId,
			unique: true,
			ref: "User",
			dropDups: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Refresh", refreshToken, "tokens");
