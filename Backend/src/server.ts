import express from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";
import { DbConnect } from "./database";
import cors from "cors";

dotenv.config({
	path: "/home/thechosenguy/Desktop/codes/Talksy/Backend/" + "/.env",
});

const app = express();
const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json());
app.use(router);

const corsOption = {
	origin: "http://localhost:3000/",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOption));

app.get("/", (req, res) => {
	res.send("Hello From Express");
});

app.listen(PORT, () => {
	console.log(`Listening on port:${PORT}`);
});
