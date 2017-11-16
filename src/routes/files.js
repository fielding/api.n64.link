import Router from 'koa-router';
import mongoose from 'mongoose';
import util from 'util';
import config from '../config/config';


const router = new Router();

mongoose.Promise = Promise;

const list = async ctx => {
  await mongoose.connect(config.db.uri, config.db.options);
  const pifyGridStoreList = util.promisify(mongoose.mongo.GridStore.list);
  const files = await pifyGridStoreList(mongoose.connection.db, 'files');
  ctx.body = files;
};

router.get('/files', list);

export default router;

