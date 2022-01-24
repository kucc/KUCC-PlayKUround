"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
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
const env = process.env.NODE_ENV || 'development';
exports.default = config[env];
