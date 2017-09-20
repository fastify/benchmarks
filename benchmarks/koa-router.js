const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/', async (ctx) => {
  ctx.body = { hello: 'world' };
});

app.use(router.routes());
app.listen(3000);
