import express from "express";
const router = express();
import { getAll, createOne, updateOne, deleteOne } from "../services/familyService.js";

router.get("/", getAll);
router.post("/", createOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

export default router;
