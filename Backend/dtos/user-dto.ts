import mongoose from "mongoose";

interface IUser {
	_id: string;
	phone: number;
	activated: boolean;
	createdAt: mongoose.SchemaTimestampsConfig;
}

export class UserDto {
	id: string;
	phone: number;
	activated: boolean;
	createdAt: mongoose.SchemaTimestampsConfig;

	constructor(user: IUser) {
		this.id = user._id;
		this.phone = user.phone;
		this.activated = user.activated;
		this.createdAt = user.createdAt;
	}
}
