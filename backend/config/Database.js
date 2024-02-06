import { Sequelize } from "sequelize";

const db = new Sequelize('jans9573_gccdb', 'jans9573_miguel', 'dWHxN1%)NL=n', {
    host: '151.106.119.226',
    port: 5173,
    dialect: 'mysql'
});

export default db;
