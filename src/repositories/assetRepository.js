import Asset from "../models/AssetModel.js";

export const assetRepository = () => {
	findAll: async () => await Asset.findAll();
};
