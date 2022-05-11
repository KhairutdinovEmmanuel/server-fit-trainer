import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// CONFIGS
import corsConfig from "./configs/cors";
import mongoConfig from "./configs/mongoConfig";
import dotEnvConfig from "./configs/dotEnvConfig";

const app = express();

// Configuration
dotenv.config(dotEnvConfig);
app.use(cors(corsConfig));

// CONSTANTS
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, mongoConfig);

app.listen(PORT, () => console.log('Server started'));
