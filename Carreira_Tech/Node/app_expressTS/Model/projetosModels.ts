import db from "../db";
import { DataTypes } from "sequelize";

export default db.define('projetos', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
         type: DataTypes.STRING,
        allowNull: false
    }
})