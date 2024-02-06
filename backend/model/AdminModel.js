import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Admin = db.define("Admin", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Admin;
