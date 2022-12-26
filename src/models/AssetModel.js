import { DataTypes } from "sequelize";
import db from "../configs/databaseConfig.js";
import Family from "./FamilyModel.js";
import Product from "./ProductModel.js";

const Asset = db.define(
	"asset",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		family_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "asset",
		timestamps: false,
		createdAt: false,
	}
);

Family.hasMany(Asset, {
	foreignKey: {
		name: "family_id",
	},
});
Product.hasMany(Asset, {
	foreignKey: {
		name: "product_id",
	},
});

Asset === db.models.Asset;

(async () => {
	await db.sync();
})();

export default Asset;
