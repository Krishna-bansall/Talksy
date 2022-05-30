import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

console.log(accessTokenSecret, refreshTokenSecret);

class TokenService {
	generateTokens(payload: string | object | Buffer) {
		const accessToken = jwt.sign(payload, accessTokenSecret as string, {
			expiresIn: "1h",
		});

		const refreshToken = jwt.sign(payload, refreshTokenSecret as string, {
			expiresIn: "1y",
		});

		return { accessToken, refreshToken };
	}
}

export const tokenService = new TokenService();