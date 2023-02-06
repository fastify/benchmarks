const { AppServer } = require('mini-express-server')
const app = new AppServer()

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(3000)
