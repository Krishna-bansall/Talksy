import { Router } from "express";
import { authController } from "../controllers/auth-controller";

export const router = Router();

router.post("/api/send-otp", authController.sendOtp);
