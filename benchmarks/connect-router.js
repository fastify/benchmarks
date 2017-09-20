const connect = require('connect');
const router = require('router')();

const app = connect();
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ hello: 'world' }));
});

app.use(router);
app.listen(3000);
