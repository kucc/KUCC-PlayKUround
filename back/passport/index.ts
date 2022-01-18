import { UserInterface } from "../models/user";

const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user:UserInterface, done:any) => {
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
