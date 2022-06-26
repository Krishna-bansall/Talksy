import mongoose from "mongoose";

interface IUser {
	_id: string;
	phone: number;
	activated: boolean;
	createdAt: mongoose.SchemaTimestampsConfig;
	name: string;
	avatar: string;
	username: string;
}

export class UserDto {
	id: string;
	phone: number;
	activated: boolean;
	createdAt: mongoose.SchemaTimestampsConfig;
	name: string;
	avatar: string;
	username: string;

	constructor(user: IUser) {
		this.id = user._id;
		this.phone = user.phone;
		this.activated = user.activated;
		this.createdAt = user.createdAt;
		this.name = user.name;
		this.avatar = user.avatar ? `${process.env.BASE_URL}${user.avatar}` : "";
		this.username = user.username;
	}
}
