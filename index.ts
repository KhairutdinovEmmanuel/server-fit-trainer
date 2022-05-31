import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
// CONFIGS
import corsConfig from "./configs/cors";
import mongoConfig from "./configs/mongoConfig";
import dotEnvConfig from "./configs/dotEnvConfig";
// CONTROLLERS
import controllerAuth from "./controllers/auth";
import controllerMessages from "./controllers/messages";

const app = express();

// CONFIGURATION
dotenv.config(dotEnvConfig);
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());

// CONSTANTS
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || '';

// ROUTES
app.use('/api/auth', controllerAuth);
app.use('/api/messages', controllerMessages);

mongoose.connect(MONGO_URI, mongoConfig);

app.listen(PORT, () => console.log('Server started'));
