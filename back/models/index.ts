import { Sequelize } from "sequelize";
import { UserInterface } from "../types/user";
import config from "../config/config";
const User = require('./user');
const Place = require('./place')

interface dbInterface {
  sequelize?: Sequelize ;
  User?: UserInterface ;
}
const db: dbInterface = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);


db.sequelize = sequelize;
db.User = User;

console.log(User)
User.init(sequelize);
Place.init(sequelize)
// User.associate(db);

module.exports = db;
