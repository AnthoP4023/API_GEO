import { config } from 'dotenv'
config()

export const BD_HOST = process.env.BD_HOST || "bfl8hd4wx5nxrgipz5wj-mysql.services.clever-cloud.com";
export const BD_DATABASE = process.env.BD_DATABASE || "bfl8hd4wx5nxrgipz5wj";
export const DB_USER = process.env.DB_USER || "u5khzykkkv3epjpy";
export const DB_PASSWORD = process.env.DB_PASSWORD || "ZAF8IjIsj6I4RlZA1Vo0";
export const DB_PORT = process.env.DB_PORT || 3306;
export const PORT = process.env.PORT || 3000;