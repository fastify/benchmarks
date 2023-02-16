'use strict'

const { AppServer } = require('mini-express-server')

const app = new AppServer()

function Employee ({ id = null, title = null, employer = null } = {}) {
  this.id = id
  this.title = title
  this.employer = employer
}

app.get('/', function (req, res) {
  const jobs = []

  for (let i = 0; i < 200; i += 1) {
    jobs[i] = new Employee({
      id: i,
      title: 'Software engineer',
      employer: 'Fastify'
    })
  }
  res.status(200).json(jobs)
})

app.listen(3000, (address) => {
  console.log(address)
}, { hostname: '127.0.0.1' })
