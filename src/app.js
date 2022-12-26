import express from "express";
import routes from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { errorLogger, errorResponder } from "./middlewares/errorHandler.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*", credentials: true }));

app.use(routes);
app.use(errorLogger);
app.use(errorResponder);

export default app;
