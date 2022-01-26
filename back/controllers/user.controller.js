"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const bcrypt = require('bcrypt');
const passport = require('passport');
const userGet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        success: true,
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        image: req.user.image,
    });
});
// eslint-disable-next-line consistent-return
const userRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exUser = yield models_1.User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (exUser) {
            if (typeof window !== 'undefined') {
                // eslint-disable-next-line no-undef
                alert('이미 사용중인 이메일입니다.');
            }
            return res.status(403).send('이미 사용중인 이메일입니다.');
        }
        const hashedPassword = yield bcrypt.hash(req.body.password, 12);
        yield models_1.User.create({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
        });
        res.status(200).json({
            success: true,
            exUser,
        });
    }
    catch (err) {
        res.json({ success: false, err });
        // next는 에러를 넘겨주는 역할.
        next(err);
    }
});
const userLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.message);
        }
        // req.body.login => req.login
        return req.login(user, (loginErr) => __awaiter(void 0, void 0, void 0, function* () {
            if (loginErr) {
                return next(loginErr);
            }
            const fullUserWithoutPassword = yield models_1.User.findOne({
                // id : req.body.user.id => id : req.user.id
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password'],
                },
            });
            return res.status(200).json(fullUserWithoutPassword);
        }));
    })(req, res, next);
};
// eslint-disable-next-line no-unused-vars
const userLogout = (req, res, next) => {
    req.logout();
    req.session.destroy;
    res.send('ok');
};
module.exports = {
    userRegister,
    userLogin,
    userLogout,
    userGet
};
