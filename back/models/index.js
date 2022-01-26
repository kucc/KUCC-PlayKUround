"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Place = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const placeModel_1 = __importDefault(require("./place/placeModel"));
const userModel_1 = __importDefault(require("./user/userModel"));
const sequelize = new sequelize_1.Sequelize(config_1.default.database, config_1.default.username, config_1.default.password, config_1.default);
exports.sequelize = sequelize;
//
// model init(define)
//
// Place의 타입?
const Place = (0, placeModel_1.default)(sequelize);
exports.Place = Place;
const User = (0, userModel_1.default)(sequelize);
exports.User = User;
//
// model relation(관계)
//
// Place의 writer라는 항목이 User의 id를 참조하고 있슴.
Place.belongsTo(User, { foreignKey: 'writer', targetKey: 'id' });
User.hasMany(Place, { foreignKey: 'writer', sourceKey: 'id' });
