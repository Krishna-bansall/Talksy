import express from "express";
import { router } from "./src/routes";
import * as dotenv from "dotenv";
import { DbConnect } from "./src/database";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});

const app = express();

const PORT = process.env.PORT || 5500;

const corsOptions = {
	credentials: true,
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use('/storage', express.static('storage'))
DbConnect();

app.use(cookieParser());
app.use(express.json({ limit: "4mb" }));
app.use(router);

app.get("/", (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	res.send("Hello From Express");
});

app.listen(PORT, () => {
	console.log(`Listening on port:${PORT}`);
});
