#!/usr/bin/env node
'use strict'

const inquirer = require('inquirer')
const bench = require('./lib/bench')
const { choices, list } = require('./lib/packages')
const commander = require('commander')

function collect (value, previous) {
  if (!choices.includes(value)) {
    throw new TypeError(`Benchmark ${value} doesn't exist.`)
  }
  return previous.concat([value])
}

commander
  .option('-a, --all', 'all')
  .option('-c, --connections <connections>', 'connections', Number)
  .option('-p, --pipelining <pipelining>', 'pipelining', Number)
  .option('-d, --duration <duration>', 'duration', Number)
  .option('-b, --benchmark <benchmarks>', 'benchmark', collect, [])
  .parse(process.argv)

function select (callback) {
  inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new inquirer.Separator(' = The usual ='),
        ...list(),
        new inquirer.Separator(' = The extras = '),
        ...list(true)
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one package.'
        }
        return true
      }
    }
  ])
    .then(function (answers) {
      callback(answers.list)
    })
}

inquirer.prompt([
  {
    type: 'confirm',
    name: 'all',
    message: 'Do you want to run all benchmark tests?',
    when: commander.all === undefined && commander.benchmark.length === 0,
    default: false
  },
  {
    type: 'input',
    name: 'connections',
    message: 'How many connections do you need?',
    default: 100,
    when: commander.connections === undefined,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  },
  {
    type: 'input',
    name: 'pipelining',
    message: 'How many pipelines do you need?',
    default: 10,
    when: commander.pipelining === undefined,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  },
  {
    type: 'input',
    name: 'duration',
    message: 'How long should it take?',
    default: 40,
    when: commander.duration === undefined,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  }
]).then((inquirerOpts) => {
  const opts = { ...inquirerOpts, ...commander }

  if (!opts.all) {
    if (opts.benchmark.length === 0) {
      select(list => bench(opts, list))
    } else {
      bench(opts, opts.benchmark)
    }
  } else {
    bench(opts, choices)
  }
})
