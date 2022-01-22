import { Sequelize } from "sequelize";
import config from "../config/config";
import PlaceModel from "./place/placeModel";
import UserModel from "./user/userModel";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

//
// model init(define)
//
// Place의 타입?
const Place = PlaceModel(sequelize)
const User = UserModel(sequelize)

//
// model relation(관계)
//

// Place의 writer라는 항목이 User의 id를 참조하고 있슴.
Place.belongsTo(User, {foreignKey: 'writer', targetKey: 'id'})
User.hasMany(Place, {foreignKey: 'writer', sourceKey: 'id'})


export {
  sequelize,
  Place,
  User
}
