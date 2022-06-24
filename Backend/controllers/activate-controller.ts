import express from "express";
import Jimp from "jimp/";
import path from "path";
import { userService } from "../services/user-service";
class ActivateController {
	async activate(req: express.Request, res: express.Response) {
		const { name, profilePicture, username } = req.body;

		console.log(name, profilePicture, username);

		if (!name || !profilePicture || !username) {
			res.status(400).json({ message: "All Fields Are Required" });
		}

		const buffer = Buffer.from(
			(profilePicture as string).replace(/^data:image\/png;base64,/, ""),
			"base64"
		);

		const imagePath = `${Date.now()}-${Math.round(Math.random() * 1)}.png`;
		try {
			const jimpRes = await Jimp.read(buffer);
			jimpRes
				.resize(150, Jimp.AUTO)
				.write(path.resolve(__dirname, `../storage/${imagePath}`));
		} catch (error) {
			res.status(500).json({ message: "Could Not process the Image" });
		}

		console.log(req);

		// userService.findUser({ _id: req.user });

		res.json({ message: "OK" });
	}
}

export const activateController = new ActivateController();
