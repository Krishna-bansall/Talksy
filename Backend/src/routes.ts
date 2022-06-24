import { Router } from "express";
import { activateController } from "../controllers/activate-controller";
import { authController } from "../controllers/auth-controller";
import { authMiddleware } from "../middleware/auth-middleware";

export const router = Router();

// Home Get Route:
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

// Auth Api Routes
router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);

//Activate Api Routes
router.post("/api/activate", authMiddleware, activateController.activate);
