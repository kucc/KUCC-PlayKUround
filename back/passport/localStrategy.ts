// 아이디 비밀번호로 로그인할 때

import { User } from "../models";
import { UserAttributes } from "../models/user/userType";

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // req.body.email
        passwordField: 'password', // req.body.password
      },
      async (email:string, password:string, done:any) => {
        try {
          // 이메일 가진 사람이 있는지 검사
          const user = await User.findOne({ where: { email } });
          if (user) {
            // 비밀번호와 해쉬화된 비밀번호를 비교한다.
            const result = await bcrypt.compare(password, user.password);
            if (result) {
              // done(서버에러, 로그인 성공or실패한 경우, 로그인 성공or실패시 메세지)
              // 밑에 done의 경우 서버에러는 null이고, 로그인이 성공
              done(null, user);
            } else {
              // 비밀번호가 일치하지 않을 때
              done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
            }
          } else {
            // 이메일이 일치하지 않을 때
            done(null, false, { message: '가입되지 않은 회원입니다.' });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};
