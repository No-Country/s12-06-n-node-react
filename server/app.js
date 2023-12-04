import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { dbConnect } from "./src/config/index.js";
import { restaurantRoutes, menuRoutes } from "./src/routes/index.js";


// console.clear();
const app = express();
app.use(cors());
app.use(express.json());

// Utiliza las ruta base por entidad
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/menu", menuRoutes);

// Conecta a la DB
dbConnect();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
