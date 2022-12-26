import { DataTypes } from "sequelize";
import db from "../configs/databaseConfig.js";

const Family = db.define(
	"family",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		id_parent: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		tableName: "family",
		timestamps: false,
		createdAt: false,
	}
);

(async () => {
	await db.sync();
})();

Family === db.models.Family;

export default Family;
