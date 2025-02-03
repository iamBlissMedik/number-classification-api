import express from "express";
import cors from "cors";
import "dotenv/config";
import classifyRoutes from "./routes/classifyRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", classifyRoutes);

export default app;
