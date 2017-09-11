'use strict'
const autocannon = require('autocannon')
const fs = require('fs')
const globalModules = require('global-modules')
const compare = require('autocannon-compare')

module.exports.fire = (handler, save) => {
  return new Promise((resolve, reject) => {
    autocannon({
      url: 'http://localhost:3000',
      connections: 10,
      pipelining: 1,
      duration: 2
    }, out)

    function out (err, result) {
      if (err) {
        reject(err)
      } else {
        if (save) {
          // fs.writeFileSync(`./results/${handler}.json`, JSON.stringify(result))
        }
        fs.writeFileSync(`${globalModules}/fastify-benchmarks/results/${handler}.json`, JSON.stringify(result))
        resolve(true)
      }
    }
  })
}

module.exports.compare = (a, b) => {
  const resA = require(`${globalModules}/fastify-benchmarks/results/${a}.json`)
  // const resA = require(`../results/${a}.json`)
  const resB = require(`${globalModules}/fastify-benchmarks/results/${b}.json`)
  // const resB = require(`../results/${b}.json`)

  return compare(resA, resB)
}
