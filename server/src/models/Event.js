import Sequelize from "sequelize";
import sequelize from "../db/sequelize";

const Event = sequelize.define(
	"Event",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: Sequelize.STRING,
		description: Sequelize.STRING,
		linkToProof: Sequelize.STRING,
		taxType: Sequelize.INTEGER
	},
	{
		freezeTableName: true
	}
);

export default Event;
