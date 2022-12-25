import express from "express";
import routes from "./routes/routes.js";
import { errorLogger, errorResponder } from "./middlewares/errorHandler.js";

const app = express();

app.use(routes);
app.use(errorLogger);
app.use(errorResponder);

export default app;
