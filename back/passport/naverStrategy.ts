import passport from 'passport';

import { User } from '../models';

const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');

module.exports = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: '/api/user/naver/callback',
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (arg0: any, arg1?: any) => void,
      ) => {
        console.log(profile);
        try {
          const exUser = await User.findOne({ where: { snsId: profile.id, provider: 'naver' } });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              snsId: profile.id,
              provider: 'naver',
              name: 'temp',
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
