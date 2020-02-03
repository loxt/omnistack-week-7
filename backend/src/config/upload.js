import multer from 'multer';
import path from 'path';

export default {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      cb(null, `IMG_${new Date().getTime().toString()}`);
    },
  }),
};
