import Router from 'koa-router';
import multer from 'koa-multer';
import GridFsStorage from 'multer-gridfs-storage';
import config from '../config/config';


const router = new Router();

const storage = GridFsStorage({
  url: config.db.uri,
  file: (req, file) => {
    return {
      metadata: {
        originalname: file.originalname
      },
      bucketName: 'files'
    };
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'));

export default router;

