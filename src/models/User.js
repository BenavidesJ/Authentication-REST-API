import { DataTypes, Sequelize } from "sequelize";
import { db } from "../config/db.js"

export const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    first_lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    second_lastname: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique:true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique:true,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    userType: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
}, {
    tableName: "User",
    freezeTableName: true,
    timestamps: false
});