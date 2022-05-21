import express from "express";

const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
	res.send("Hello From Express");
});

app.listen(PORT, () => {
	console.log(`Listening on port:${PORT}`);
});
