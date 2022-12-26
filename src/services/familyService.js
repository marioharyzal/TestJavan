import { familyRepository } from "../repositories/familyRepository.js";

const getAll = async (req, res, next) => {
	try {
		const families = await familyRepository.findAllHierarchy();
		res.status(200).json({
			statusCode: 200,
			message: "Ok",
			data: families,
		});
	} catch (error) {
		error.status = 500;
		error.message = "Internal server Error!";
		next(error);
	}
};

const createOne = async (req, res, next) => {
	try {
		await familyRepository.create(req.body);
		res.status(201).json({ statusCode: 201, message: "Created" });
	} catch (error) {
		error.status = 400;
		error.message = "Bad request!";
		next(error);
	}
};

const updateOne = async (req, res, next) => {
	try {
		const existFamily = await familyRepository.findById(req.params.id);
		if (!existFamily) {
			return res.status(404).json({ statusCode: 404, message: "Not found!" });
		}
		await familyRepository.update(req.params.id, req.body);
		res.status(201).json({ statusCode: 200, message: "Updated" });
	} catch (error) {
		error.status = 400;
		error.message = "Bad request!";
		next(error);
	}
};

const deleteOne = async (req, res, next) => {
	try {
		const id = req.params.id;
		const existFamily = await familyRepository.findById(id);
		if (!existFamily) {
			return res.status(404).json({ statusCode: 404, message: "Not found!" });
		}

		await familyRepository.delete(id);
		res.status(200).json({ statusCode: 200, message: "Deleted successfully" });
	} catch (error) {
		error.status = 400;
		error.message = "Bad request!";
		next(error);
	}
};

export { getAll, createOne, updateOne, deleteOne };
