import familyRoutes from "./familyRoutes.js";
import express from "express";

const router = express();

router.use("/families", familyRoutes);

export default router;
