import db from "../db";
import { DataTypes } from "sequelize";

export default db.define('contato', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
         type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
})