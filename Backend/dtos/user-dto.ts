import mongoose from "mongoose";

interface IUser {
	phone: number;
	timestamp: mongoose.SchemaTimestampsConfig;
}

class UserDto {
	_id: string;
	phone: string;
	activated: boolean;
	createdAt: date;

	constructor(user: userSchema) {
		this._id = "";
		this.phone = "";
	}
}
