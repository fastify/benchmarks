#!/usr/bin/env node
'use strict'

const inquirer = require('inquirer')
const bench = require('./lib/bench')

function select (callback) {
  inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new inquirer.Separator(' = The usual ='),
        {
          name: 'fastify',
          checked: true
        },
        {
          name: 'connect'
        },
        {
          name: 'express'
        },
        {
          name: 'hapi'
        },
        {
          name: 'koa'
        },
        {
          name: 'polka'
        },
        {
          name: 'rayo'
        },
        {
          name: 'restify'
        },
        {
          name: 'take-five'
        },
        {
          name: 'total.js'
        },
        {
          name: 'foxify'
        },
        {
          name: '@leizm-web'
        },
        new inquirer.Separator(' = The extras = '),
        {
          name: 'connect-router'
        },
        {
          name: 'express-route-prefix'
        },
        {
          name: 'express-with-middlewares'
        },
        {
          name: 'fastify-big-json'
        },
        {
          name: 'koa-router'
        },
        {
          name: 'micro'
        },
        {
          name: 'micro-router'
        },
        {
          name: 'spirit'
        },
        {
          name: 'spirit-router'
        },
        {
          name: 'trek-engine'
        },
        {
          name: 'trek-engine-router'
        }
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
    bench(opts, [
      'bare',
      'connect',
      'connect-router',
      'express',
      'express-route-prefix',
      'express-with-middlewares',
      'fastify',
      'hapi',
      'koa',
      'koa-router',
      'micro',
      'micro-router',
      'polka',
      'rayo',
      'restify',
      'spirit',
      'spirit-router',
      'take-five',
      'total.js',
      'foxify',
      'trek-engine',
      'trek-engine-router'
    ])
  }
})
