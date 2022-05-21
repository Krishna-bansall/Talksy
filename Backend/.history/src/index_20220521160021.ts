import express from "express";
const app = express();

const add = (a: number, b?: number): number => {
	return a + (b as string);
};

app.get("/", (req) => {});

app.listen(3000, () => {
	console.log("Server Started");
	console.log(add(1, 2));
});
