import { Router } from "express";
import { authController } from "../controllers/auth-controller";

export const router = Router();

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);
router.get("/", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"PUT, POST, GET, DELETE, PATCH, OPTIONS"
	);
});
