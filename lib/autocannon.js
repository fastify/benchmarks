'use strict'
const autocannon = require('autocannon')
const fs = require('fs')
const compare = require('autocannon-compare')
const { promisify } = require('util')
const path = require('path')

const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)
const access = promisify(fs.access)

const resultsDirectory = path.join(process.cwd(), 'results')

const run = async (opts) => {
  opts = opts || {}
  return new Promise((resolve, reject) => {
    opts.url = 'http://localhost:3000'
    autocannon(opts, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const writeResult = async (handler, result) => {
  try {
    await access(resultsDirectory)
  } catch (e) {
    await mkdir(resultsDirectory)
  }

  result.server = handler

  var dest = path.join(resultsDirectory, handler + '.json')
  return await writeFile(dest, JSON.stringify(result))
}

module.exports.fire = async (opts, handler, save) => {
  const result = await run(opts)
  if (save) {
    return await writeResult(handler, result)
  }
  return
}

module.exports.compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`)
  const resB = require(`${resultsDirectory}/${b}.json`)
  const comp = compare(resA, resB)
  console.log(comp)
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
