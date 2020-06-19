import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename(req, file, callback) {
      const hash = crypto.randomBytes(10).toString('hex');

      const filename = `${hash + path.extname(file.originalname)}`;

      return callback(null, filename);
    },
  }),
};