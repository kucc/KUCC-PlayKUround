import express from "express";

const userRouter = require('./user');
const placeRouter = require('./place');
const postRouter = require('./post');
const commentRouter = require('./comment');
const hashtagRouter = require('./hashtag');

const router = express.Router();

router.use('/user', userRouter);
router.use('/place', placeRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/hashtag', hashtagRouter);

export default router;