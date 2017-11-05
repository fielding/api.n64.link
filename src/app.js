import Koa from 'koa';
import cors from 'kcors';

import index from './routes/index';
import upload from './routes/upload';

const app = new Koa();

app
  .use(cors())
  .use(index.routes(), index.allowedMethods())
  .use(upload.routes(), upload.allowedMethods());

export default app;
