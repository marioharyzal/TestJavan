import { DataTypes } from "sequelize";
import db from "../configs/databaseConfig.js";

const Product = db.define(
	"product",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		product_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		product_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "product",
		timestamps: false,
		createdAt: false,
	}
);

Product === db.models.Product;

export default Product;
