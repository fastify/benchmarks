const connect = require('connect')

const app = connect()
app.use((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
})

app.listen(3000)
