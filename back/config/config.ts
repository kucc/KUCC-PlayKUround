import { Options } from 'sequelize/types';

import { configType } from '../types/config';

require('dotenv').config();

const config: configType = {
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
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
  },
};

const env: string = process.env.NODE_ENV || 'development';

export default config[env];
