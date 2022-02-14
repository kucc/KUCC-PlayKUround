import { Multer } from 'multer';
import path from 'path';

import { DestinationCallback, FileNameCallback } from './Upload.type';

const multer = require('multer');

const __basedir = path.resolve();

// 이미지 받았을 때 필터링
const imageFilter = (req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
  // svg도 추가??
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: DestinationCallback) => {
    // 서버에 저장될 위치
    cb(null, __basedir + '/assets/');
  },
  filename: (req: Request, file: Express.Multer.File, cb: DestinationCallback) => {
    // 서버에 저장될 때 파일 이름
    cb(null, `${Date.now()}-PlayKUround-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter }).single(
  // 프론트에서 넘겨울 params key 값, 오른쪽 같이 넘겨줘야함-> {photo: binary}
  'photo',
);
module.exports = uploadFile;
