import express from "express";
const router = express();
import { getAll } from "../services/assetService.js";

router.get("/", getAll);

export default router;
