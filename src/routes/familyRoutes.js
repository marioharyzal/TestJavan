import express from "express";
const router = express();

router.get("/", (req, res, next) => {
	let error = new Error(`ini error`);
	error.status = 400;
	next(error);
});

export default router;
