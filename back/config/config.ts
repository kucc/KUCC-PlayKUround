import { Options } from "sequelize/types";
import { configType } from "../types/config";

require('dotenv').config();

const config : configType = {
  development: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'PlayKUround',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'PlayKUround',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'PlayKUround',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};

const env : string = process.env.NODE_ENV || 'development';

export default config[env];
