import Sequelize from "sequelize";
import sequelize from "../db/sequelize";

const TaxType = sequelize.define(
	"TaxType",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: Sequelize.STRING
	},
	{
		freezeTableName: true
	}
);

export default TaxType;
