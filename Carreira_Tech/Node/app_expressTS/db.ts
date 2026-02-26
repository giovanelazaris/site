import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST!;
const dbPort = process.env.DB_PORT;
const server = process.env.DB_SERVER!;


const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "mysql",   // <<<<<< CORRETO PARA XAMPP
    host: dbHost,
    port: Number(dbPort),
    logging: false
});


/*const sequelize = new Sequelize(dbName, dbUser, dbPass,{
    dialect:"mssql",
    host:server, 
    port:Number(dbPort)
    
});*/

export default sequelize;
