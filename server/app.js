import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { dbConnect } from "./src/config/index.js";
import { logs } from "./src/middlewares/index.js";
import { restaurantRoutes, categoryRoutes, menuRoutes, commentRoutes, userRoutes } from "./src/routes/index.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logs);

// Routes
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/comment", commentRoutes);
app.use("/api/v1/user", userRoutes);

// Connect DB
dbConnect();

// Listen Server Host:Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`💻 Server running on http://localhost:${PORT}`));
