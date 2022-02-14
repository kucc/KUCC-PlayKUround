import { Sequelize } from 'sequelize';

import config from '../config/config';
import ImageModel from './image/imageModel';
import MenuModel from './menu/menuModel';
import PlaceModel from './place/placeModel';
import UserModel from './user/userModel';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//
// model init(define)
//
// Place의 타입?
const Place = PlaceModel(sequelize);
const User = UserModel(sequelize);
const Menu = MenuModel(sequelize);
const Image = ImageModel(sequelize);

//
// model relation(관계)
//
// Place의 writer라는 항목이 User의 id를 참조하고 있슴.
Place.belongsTo(User, { foreignKey: 'writer', targetKey: 'id' });
Place.hasMany(Menu, { foreignKey: 'placeId', sourceKey: 'id' });
Place.hasMany(Image, { foreignKey: 'source', sourceKey: 'id' });

Menu.belongsTo(Place, { foreignKey: 'placeId', targetKey: 'id' });
Menu.hasMany(Image, { foreignKey: 'source', sourceKey: 'id' });

User.hasMany(Place, { foreignKey: 'writer', sourceKey: 'id' });
User.hasMany(Image, { foreignKey: 'source', sourceKey: 'id' });

Image.belongsTo(Place, { foreignKey: 'source', targetKey: 'id' });
Image.belongsTo(User, { foreignKey: 'source', targetKey: 'sourceId' });
Image.belongsTo(Menu, { foreignKey: 'source', targetKey: 'id' });

export { sequelize, Place, User, Menu, Image };
