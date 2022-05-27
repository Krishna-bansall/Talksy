import express from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";

dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
	res.send("Hello From Express");
});

app.listen(PORT, () => {
	console.log(`Listening on port:${PORT}`);
});
