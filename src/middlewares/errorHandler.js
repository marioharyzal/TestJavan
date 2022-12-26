const errorLogger = (error, req, res, next) => {
	next(error);
};

const errorResponder = (error, req, res, next) => {
	const { status, message } = error;
	res.status(status).json({ status, message });
};

export { errorLogger, errorResponder };
