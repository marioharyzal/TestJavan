import express from "express";
import * as dotenv from "dotenv";
import app from "./src/app.js";

const server = express();
dotenv.config();

server.use(app);

server.listen(process.env.PORT, () => console.log(`app listen on port ${process.env.PORT}`));
