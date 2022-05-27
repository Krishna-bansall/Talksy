import crypto from "crypto";
import twilio from "twilio";
import * as dotenv from "dotenv";

dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;

const twilioConfig = twilio(smsSid, smsAuthToken);

class OtpService {
	async generateOtp() {
		const otp = crypto.randomInt(100000, 999999);
		return otp;
	}

	async sendBySms(phoneNo: string, otp: string) {
		return await twilioConfig.messages.create({
			to: phoneNo,
			from: process.env.SMS_FROM_NUMBER,
			body: `Your Talksy Verification Code is ${otp}`,
		});
	}
	verifyOtp() {}
}
export const otpService = new OtpService();
