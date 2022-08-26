import userModel from "../models/user-model";
import mongoose from "mongoose";

interface IData {
	phone: number;
	activate?: boolean;
}

class UserService {
	async findUser(filter: mongoose.FilterQuery<any>) {
		const user = await userModel.findOne(filter);
		return user;
	}
	async createUser(data: IData) {
		const user = await userModel.create(data);
		return user;
	}
}
export const userService = new UserService();
