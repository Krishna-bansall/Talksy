import express from "express";
import { createReadStream, readFile } from "fs";
import Jimp from "jimp/";
import path from "path";

import { userService } from "../services/user-service";

class ActivateController {
	async activate(req: express.Request, res: express.Response) {
		let userDefault;
		const stuff = readFile(
			path.resolve(__dirname, `../storage/userDefault.svg`),
			(err, data) => {
				console.log(err);
				// console.log(data.toString("base64"));
				return data.toString("base64");
			}
		);
		// console.log(userDefault);
		const { name, profilePicture, username } = req.body;

		console.log(
			`\n` +
				// (profilePicture as string)
				// 	.slice(
				// 		profilePicture.indexOf(",") + 1,
				// 		(profilePicture as string).length
				// 	)
				// 	.toUpperCase()
				(await stuff)
		);
		if (
			(profilePicture as string)
				.slice(
					profilePicture.indexOf(",") + 1,
					(profilePicture as string).length
				)
				.toUpperCase() === userDefault
		) {
			console.log(true);
		} else {
			console.log(false);
		}

		// if (!name || !profilePicture || !username) {
		// 	res.status(400).json({ message: "All Fields Are Required" });
		// }
		// console.log(typeof profilePicture);

		// const buffer = Buffer.from(
		// 	(profilePicture as string).replace(
		// 		/^data:image\/(png|jpg|svg\+xml);base64,/,
		// 		""
		// 	),
		// 	"base64"
		// );

		// const imagePath = `${Date.now()}-${Math.round(Math.random() * 1)}.png`;
		// try {
		// 	const jimpRes = await Jimp.read(buffer);
		// 	jimpRes
		// 		.resize(150, Jimp.AUTO)
		// 		.write(path.resolve(__dirname, `../storage/${imagePath}`));
		// } catch (error) {
		// 	res.status(500).json({ message: "Could Not process the Image" });
		// }

		// console.log(req);

		// userService.findUser({ _id: req.user });

		res.json({ message: "OK" });
	}
}

export const activateController = new ActivateController();
