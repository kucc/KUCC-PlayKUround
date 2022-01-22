import { User } from "../models";
import { UserAttributes } from "../models/user/userType";


const passport = require('passport');
const local = require('./localStrategy');


module.exports = () => {
  passport.serializeUser((user:UserAttributes, done:any) => {
    done(null, user.id); // 세션에 user의 id만 저장
  });

  passport.deserializeUser(async (id:number, done:any) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
