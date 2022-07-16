import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
// CONFIGS
import log from "./configs/log";
import corsConfig from "./configs/cors";
import mongoConfig from "./configs/mongoConfig";
import dotEnvConfig from "./configs/dotEnvConfig";
// CONTROLLERS
import controllerAuth from "./controllers/auth";
import controllerMessages from "./controllers/messages";
import controllerUsers from "./controllers/users";

const app = express();

// CONFIGURATION
dotenv.config(dotEnvConfig);
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());

// CONSTANTS
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// ROUTES
app.use('/api/auth', controllerAuth);
app.use('/api/messages', controllerMessages);
app.use('/api/users', controllerUsers);

(async () => {
    if (!MONGO_URI) {
        log.error('Environment variable MONGO_URI is not defined');
        return process.exit(1);
    }
    await mongoose.connect(MONGO_URI, mongoConfig);
})();

app.listen(PORT, () => log.info('Server started'));
