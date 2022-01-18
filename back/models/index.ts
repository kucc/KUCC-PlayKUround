import { Sequelize } from "sequelize";
import { UserInterface } from "./user";

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');

interface dbInterface {
  sequelize: Sequelize | null;
  User: UserInterface | null;
}
const db: dbInterface = { sequelize: null, User: null };
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);
// User.associate(db);

module.exports = db;
