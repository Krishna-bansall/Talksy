import express from "express";
import { otpService } from "../services/otp-service";
import { hashService } from "../services/hash-service";
import { userService } from "../services/user-service";
import { tokenService } from "../services/token-service";
import { UserDto } from "../dtos/user-dto";

class AuthController {
	async sendOtp(req: express.Request, res: express.Response) {
		const { phone } = req.body;

		const otp = await otpService.generateOtp();
		const ttl = 1000 * 60 * 2;
		const expires = Date.now() + ttl;

		const data = `${otp}.${phone}.${expires}`;
		console.log(process.env.HASH_SECRET);
		const hash = hashService.hashOtp(data);

		if (!phone) {
			res.status(400).json({ message: "Phone Field Is Required!" });
		}

		try {
			// await otpService.sendBySms(phone, otp.toString());
			res.json({ hash: `${hash}_${expires}`, phone, otp });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "Message Sending Failed" });
		}

		// res.json({ hash });
	}
	async verifyOtp(req: express.Request, res: express.Response) {
		const { otp, hash, phone } = req.body;
		if (!otp || !hash || !phone) {
			res.status(400).json({ message: "All Fields Are Required!" });
		}

		const [hashedOtp, expires] = (hash as string).split("_");
		if (Date.now() > +expires) {
			res.status(400).json({ message: "OTP has expired!" });
			return;
		}

		const data = `${otp}.${phone}.${expires}`;
		const isValid = otpService.verifyOtp(hashedOtp, data);

		if (!isValid) {
			res.status(400).json({ message: "Invalid Otp" });
			return;
		}

		let user: any;
		try {
			user = await userService.findUser({ phone });
			console.log(user);
			if (!user) {
				user = await userService.createUser({ phone });
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "DB Error" });
		}

		const { accessToken, refreshToken } = tokenService.generateTokens({
			_id: await user._id,
			activated: false,
		});
		tokenService.storeRefreshToken(refreshToken, user._id);

		res.cookie("refreshToken", refreshToken, {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			httpOnly: true,
		});

		res.cookie("accessToken", accessToken, {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			httpOnly: true,
		});

		const userDto = new UserDto(user);
		res.json({ user: userDto, auth: true });
	}
}

export const authController = new AuthController();
