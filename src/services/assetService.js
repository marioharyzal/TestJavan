import { assetRepository } from "../repositories/assetRepository.js";

const getAll = async () => {
	try {
		const assets = await assetRepository.findAll();
		res.status(200).json({
			statusCode: 200,
			message: "Ok",
			data: assets,
		});
	} catch (error) {
		error.status = 500;
		error.message = "Internal server Error!";
		next(error);
	}
};

export { getAll };
