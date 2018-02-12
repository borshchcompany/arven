import Sequelize from "sequelize";
import config from "./config";

const { database, user, password, host } = config;

const sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: "mysql"
});

console.log("Create sequelize connection");

export default sequelize;
