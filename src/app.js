import Koa from 'koa';
import cors from 'kcors';

import index from './routes/index';
import upload from './routes/upload';
import files from './routes/files';

const app = new Koa();

app
  .use(cors())
  .use(index.routes(), index.allowedMethods())
  .use(upload.routes(), upload.allowedMethods());
  .use(files.routes(), files.allowedMethods());

export default app;
