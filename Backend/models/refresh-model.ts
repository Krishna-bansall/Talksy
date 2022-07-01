import mongoose, { Schema } from "mongoose";

export interface IRefreshModel extends mongoose.Document {
	token: string;
	uid: string;
	createdAt: Date;
	updatedAt: Date;
}

const refreshToken = new Schema<IRefreshModel>(
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
