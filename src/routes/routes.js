import familyRoutes from "./familyRoutes.js";
import assetRoutes from "./assetRoutes.js";
import express from "express";

const router = express();

router.use("/families", familyRoutes);
router.use("/assets", assetRoutes);

export default router;
