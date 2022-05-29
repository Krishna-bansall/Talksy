import mongoose, { ConnectOptions } from "mongoose";
// import * as dotenv from "dotenv";

// dotenv.config({
// 	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
// });

export const DbConnect = () => {
	console.log("coming here...", process.env.DB_URL);
	const DB_URL = process.env.DB_URL;
	// Database connection
	mongoose.connect(
		DB_URL as string,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions
	);
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", () => {
		console.log("DB connected...");
	});
};
