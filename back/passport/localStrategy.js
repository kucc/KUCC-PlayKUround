"use strict";
// 아이디 비밀번호로 로그인할 때
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password', // req.body.password
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // 이메일 가진 사람이 있는지 검사
            const user = yield User.findOne({ where: { email } });
            if (user) {
                // 비밀번호와 해쉬화된 비밀번호를 비교한다.
                const result = yield bcrypt.compare(password, user.password);
                if (result) {
                    // done(서버에러, 로그인 성공or실패한 경우, 로그인 성공or실패시 메세지)
                    // 밑에 done의 경우 서버에러는 null이고, 로그인이 성공
                    done(null, user);
                }
                else {
                    // 비밀번호가 일치하지 않을 때
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            }
            else {
                // 이메일이 일치하지 않을 때
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        }
        catch (error) {
            console.error(error);
            done(error);
        }
    })));
};
