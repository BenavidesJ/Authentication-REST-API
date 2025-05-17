import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER } from "./index.js";

const options = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  logging: false,
}

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, options);