import Family from "../models/FamilyModel.js";
import db from "../configs/databaseConfig.js";
import { QueryTypes } from "sequelize";

export const familyRepository = {
	findAllHierarchy: async () =>
		await db.query(
			"select f.id , f.name, f.gender, fv.name as child_name, fv.gender as gender_child from family f left join family fv on f.id = fv.id_parent",
			{
				type: QueryTypes.SELECT,
			}
		),
	create: async (family) => await Family.create(family),
	findById: async (id) => await Family.findByPk(id),
	update: async (id, family) =>
		await Family.update(family, {
			where: {
				id,
			},
		}),
	delete: async (id) => await Family.destroy({ where: { id } }),
};
