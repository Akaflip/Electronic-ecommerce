import { Sequelize } from "sequelize";
const DbName = 'E-commerce';
const DbUserName = 'postgres';
const DbPassword = 'root';
const DbHost = 'localhost';
const DbDriver = 'postgres';
const DbPort = 5432;
const sequelizeConnection = new Sequelize(DbName, DbUserName, DbPassword, {
    host: DbHost,
    dialect: DbDriver,
    port: DbPort
});
export default sequelizeConnection;
//# sourceMappingURL=config.js.map