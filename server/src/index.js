import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
	const hola = { sayHi: "hola team back" };
	res.status(200).json({ message: hola });
});

app.listen(PORT, () => console.log(`Server up on http://localhost${PORT}`));
