import "dotenv/config.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;
import dbConnect from "./src/config/mongo.js";
import { restaurantRoutes } from "./src/routes";

app.use("/api/restaurants", restaurantRoutes);

dbConnect();
app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}`));
