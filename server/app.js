console.clear();
import "dotenv/config.js";
import express from "express";
import { dbConnect } from "./src/config/index.js";
import { restaurantRoutes } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

dbConnect();

app.use("/api/v1/restaurant", restaurantRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
