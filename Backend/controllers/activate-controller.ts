import express from "express";
import { createReadStream } from "fs";
import { readFile } from "fs/promises";
import Jimp from "jimp/";
import path from "path";

import { UserDto } from "../dtos/user-dto";
import { userService } from "../services/user-service";

class ActivateController {
	async activate(req: express.Request, res: express.Response) {
		const { name, profilePicture, username } = req.body;
		let isDefault: boolean;

		const userBuffer = readFile(
			path.resolve(__dirname, `../storage/userDefault.svg`)
		);
		const userDefault = Buffer.from(await userBuffer).toString("base64");
		const imagePath = `${Date.now()}-${Math.round(Math.random() * 1)}.png`;
		// );
		if (
			(profilePicture as string).slice(
				profilePicture.indexOf(",") + 1,
				(profilePicture as string).length
			) === userDefault
		) {
			console.log(true);
			isDefault = true;
		} else {
			console.log(false);
			if (!name || !profilePicture || !username) {
				res.status(400).json({ message: "All Fields Are Required" });
				return;
			}
			const buffer = Buffer.from(
				(profilePicture as string).replace(
					/^data:image\/(png|jpg|svg\+xml);base64,/,
					""
				),
				"base64"
			);

			try {
				const jimpRes = await Jimp.read(buffer);
				jimpRes
					.resize(150, Jimp.AUTO)
					.write(path.resolve(__dirname, `../storage/${imagePath}`));
			} catch (error) {
				res.status(500).json({ message: "Could Not process the Image" });
				return;
			}
			isDefault = false;
		}

		try {
			// Find If User Exists
			const userId = (req as any).user._id;
			const user = await userService.findUser({ _id: userId });
			if (!user) {
				res.status(404).json({ message: "User Not Found" });
				return;
			}

			// console.log((await userService.findUser({ user: username })).activated);
			// Set User
			if ((await userService.findUser({ user: username })).activated) {
				res.status(404).json({ message: "Username Already Taken" });
				return;
			} else {
				user.username = username;
			}
			user.name = name;
			user.activated = true;
			user.avatar = `${
				isDefault
					? path.resolve(__dirname, `../storage/userDefault.svg`)
					: `../storage/${imagePath}`
			}`;
			user.save();
			res.json({ user: new UserDto(user) });
			return;
		} catch (error: any) {
			res.status(500).json({ message: "Database just fucked up" });
			return;
		}
	}
}

export const activateController = new ActivateController();
