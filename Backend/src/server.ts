import express from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";
import { DbConnect } from "./database";

var cors = require("cors");
dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5500;
const corsOptions = {
	origin: "http://localhost:3000/",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

DbConnect();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	res.send("Hello From Express");
});

app.listen(PORT, () => {
	console.log(`Listening on port:${PORT}`);
});
