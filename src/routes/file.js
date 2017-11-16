import Router from 'koa-router';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import config from '../config/config';

const router = new Router();

mongoose.Promise = Promise;

const fileData = (gfs, id) => {
  return new Promise((resolve, reject) => {
    gfs.findOne({ _id: id }, (err, file) => {
      if (err) {
        reject(err);
      }
      return resolve(file);
    });
  });
};

const getFile = async ctx => {
  await mongoose.connect(config.db.uri, config.db.options);
  const gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection('files');
  const file = await fileData(gfs, ctx.params.id);
  const readstream = gfs.createReadStream({ _id: ctx.params.id });
  ctx.set('Content-Type', file.contentType);
  ctx.body = readstream.pipe(ctx.res);
};

const deleteFile = async ctx => {};

router.get('/file/:id', getFile);
router.delete('/file/:id', deleteFile);

export default router;
