import Router from 'koa-router';

const router = new Router();

const index = async ctx => {
  ctx.body = 'hello n64.link!';
};

router.get('', index);

export default router;

