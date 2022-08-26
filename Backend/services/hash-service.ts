import crypto from "crypto";

class HashService {
	hashOtp(data: string) {
		console.log(data);
		return crypto
			.createHmac("sha256", process.env.HASH_SECRET!)
			.update(data.toString())
			.digest("hex");
	}
}

export const hashService = new HashService();
