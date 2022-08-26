import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema(
	{
		phone: { type: String, required: true },
		name: { type: String, required: false },
		avatar: { type: String, required: false },
		username: {
			type: String,
			required: false,
			unique: true,
			dropDups: true,
		},
		activated: { type: Boolean, required: false, default: false },
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Users", userSchema, "users");
