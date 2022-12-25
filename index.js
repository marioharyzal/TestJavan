import express from "express";
import * as dotenv from "dotenv";
import app from "./src/app.js";
import db from "./src/configs/databaseConfig.js";

const server = express();
dotenv.config();

server.use(app);
server.use(db);

server.listen(process.env.PORT, () => console.log(`app listen on port ${process.env.PORT}`));
