const { exec, fork } = require('child_process')
const ora = require('ora')
let list = ['bare', 'express-route-prefix', 'express-with-middlewares', 'express', 'hapi', 'koa-router', 'koa', 'restify', 'take-five', 'fastify']

const doBench = handler => {
  return new Promise((resolve, reject) => {
    const spinner = ora(`Started ${handler}`).start()
    const forked = fork(`benchmarks/${handler}`)
    setTimeout(function () {
      spinner.color = 'yellow'
      spinner.text = `Working ${handler}`
    }, 500)
    exec('node node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`)
        reject(err)
      }
      forked.kill('SIGINT')
      spinner.text = `Results for ${handler}`
      spinner.succeed()
      resolve(stderr)
    })
  })
}

const start = (list, inc = 0) => {
  return new Promise(async (resolve, reject) => {
    if (list.length === inc) {
      process.exit()
    }
    let handler = list[inc]
    try {
      let result = await doBench(handler)
      console.log(result, '\n')
      inc++
      start(list, inc)
    } catch (e) {
      reject(e)
    }
  })
}

start(list)
  .catch(err => console.log(err))
