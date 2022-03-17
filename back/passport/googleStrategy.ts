import passport from 'passport';

import { TEMP_USER_NAME } from '../constant';
import { User } from '../models';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/api/user/google/callback',
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (arg0: any, arg1?: any) => void,
      ) => {
        try {
          const exUser = await User.findOne({ where: { snsId: profile.id, provider: 'google' } });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              snsId: profile.id,
              provider: 'google',
              name: TEMP_USER_NAME,
              sourceId: 'temp',
            });
            // sourceId Update하기
            const { id: userId } = newUser;
            await User.update({ sourceId: `user_${userId}` }, { where: { id: userId } });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};
