import express from "express";

const app = express();

const errorLogger = (error, req, res, next) => {
	console.log(`error : ${error.message}`);
	next(error);
};

const errorResponder = (error, req, res, next) => {
	const { status, message } = error;
	res.status(status).json({ status, message });
};

export { errorLogger, errorResponder };
