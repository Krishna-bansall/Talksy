import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema(
	{
		phone: { type: String, required: true },
		activated: { type: Boolean, required: false, default: false },
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Users", userSchema, "users");
