import { Sequelize } from 'sequelize';

import config from '../config/config';
import CommentModel from './comment/commentModel';
import HashtagModel from './hashtag/hashtagModel';
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
const Hashtag = HashtagModel(sequelize);
const Comment = CommentModel(sequelize);

//
// model relation(관계)
//
// Place의 writer라는 항목이 User의 id를 참조하고 있슴.

Place.belongsTo(User, { foreignKey: 'writer', targetKey: 'id' });
Place.hasMany(Menu, { foreignKey: 'placeId', sourceKey: 'id' });
Place.hasMany(Image, { foreignKey: 'source', sourceKey: 'sourceId' });
Place.hasMany(Comment, { foreignKey: 'source', sourceKey: 'sourceId' });
// Hashtag와는 hashtagItem을 통한 다대다 관계
Place.hasMany(Hashtag, {
  foreignKey: 'source',
  sourceKey: 'sourceId',
});

Menu.belongsTo(Place, { foreignKey: 'placeId', targetKey: 'id' });
Menu.hasMany(Image, { foreignKey: 'source', sourceKey: 'sourceId' });

User.hasMany(Place, { foreignKey: 'writer', sourceKey: 'id' });
User.hasMany(Image, { foreignKey: 'source', sourceKey: 'sourceId' });

Image.belongsTo(Place, { foreignKey: 'source', targetKey: 'sourceId' });
Image.belongsTo(User, { foreignKey: 'source', targetKey: 'sourceId' });
Image.belongsTo(Menu, { foreignKey: 'source', targetKey: 'sourceId' });

Hashtag.belongsTo(Place, {
  foreignKey: 'source',
  targetKey: 'sourceId',
});

Comment.belongsTo(Place, { foreignKey: 'source', targetKey: 'sourceId' });

// Todo : Post와 Comment, Image, Hashtag 연결.

export { sequelize, Place, User, Menu, Image, Hashtag, Comment };
