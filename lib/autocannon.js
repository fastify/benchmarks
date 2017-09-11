'use strict'
const autocannon = require('autocannon')
const fs = require('fs')
const globalModules = require('global-modules')
const compare = require('autocannon-compare')

const resultsDirectory = `${globalModules}/fastify-benchmarks/results`

const run = async () => {
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
        resolve(result)
      }
    }
  })
}

const writeResult = async (handler, result) => {
  if (!fs.existsSync(resultsDirectory)) {
    fs.mkdirSync(resultsDirectory)
  }

  fs.writeFileSync(`${resultsDirectory}/${handler}.json`, JSON.stringify(result))

  return true
}

module.exports.fire = async (handler, save) => {
  const result = await run()
  return await writeResult(handler, result)
}

module.exports.compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`)
  const resB = require(`${resultsDirectory}/${b}.json`)
  const comp = compare(resA, resB)

  if (comp.equal) {
    return true
  } else if (comp.aWins) {
    return {
      diff: comp.requests.difference,
      fastest: a,
      slowest: b
    }
  } else {
    return {
      diff: compare(resB, resA).requests.difference,
      fastest: b,
      slowest: a
    }
  }
}
