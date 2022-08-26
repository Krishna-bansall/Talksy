import express from "express";
import { tokenService } from "../services/token-service";

export const authMiddleware = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { accessToken } = req.cookies;

		if (!accessToken) throw new Error();

		const userData = await tokenService.verifyAccessToken(accessToken);

		if (!userData) {
			throw new Error();
		}

		(req as any).user = userData;
		console.log(accessToken);
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json("Invalid token");
	}
};
