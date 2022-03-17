import passport from 'passport';

import { TEMP_USER_NAME } from '../constant';
import { User } from '../models';

const KaKaoStrategy = require('passport-kakao').Strategy;

module.exports = () => {
  passport.use(
    new KaKaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: '/api/user/kakao/callback',
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (arg0: any, arg1?: any) => void,
      ) => {
        console.log(profile);
        try {
          const exUser = await User.findOne({ where: { snsId: profile.id, provider: 'kakao' } });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              snsId: profile.id,
              provider: 'kakao',
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
