import Router from 'koa-router';

const router = new Router();

const upload = async ctx => {
  ctx.body = 'uplaod router here!';
};

router.get('/upload', upload);

export default router;

