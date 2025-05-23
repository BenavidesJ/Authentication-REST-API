import dotenv from 'dotenv';

dotenv.config();

// Server configuration
export const PORT = process.env.SERVER_PORT;
// Database configuration
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_DIALECT = process.env.DB_DIALECT;