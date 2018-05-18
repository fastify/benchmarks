#!/usr/bin/env node
'use strict'

const inquirer = require('inquirer')
const bench = require('./lib/bench')

const choices = {
  'bare': {},
  'connect': {},
  'connect-router': { extra: true },
  'express': {},
  'express-route-prefix': { extra: true },
  'express-with-middlewares': { extra: true },
  'fastify': { checked: true },
  'fastify-big-json': { extra: true },
  'hapi': {},
  'koa': {},
  'koa-router': { extra: true },
  'micro': { extra: true },
  'micro-router': { extra: true },
  'polka': {},
  'rayo': {},
  'restify': {},
  'spirit': { extra: true },
  'spirit-router': { extra: true },
  'take-five': {},
  'total.js': {},
  'trek-engine': { extra: true },
  'trek-engine-router': { extra: true }
}
const choiceNames = Object.keys(choices).sort()

function select (callback) {
  inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new inquirer.Separator(' = The usual ='),
        ...choiceNames.map((c) => !choices[c].extra ? Object.assign({}, choices[c], { name: c }) : null).filter(c => c),
        new inquirer.Separator(' = The extras = '),
        ...choiceNames.map((c) => choices[c].extra ? Object.assign({}, choices[c], { name: c }) : null).filter(c => c)
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
    default: false
  },
  {
    type: 'input',
    name: 'connections',
    message: 'How many connections do you need?',
    default: 100,
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
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  },
  {
    type: 'input',
    name: 'duration',
    message: 'How long should it take?',
    default: 5,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  }
]).then((opts) => {
  if (!opts.all) {
    select(list => bench(opts, list))
  } else {
    bench(opts, choiceNames)
  }
})
