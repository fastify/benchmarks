#!/usr/bin/env node
const inquirer = require('inquirer')
const bench = require('./lib/bench')

inquirer.prompt([{
  type: 'confirm',
  name: 'all',
  message: 'Do you want to run all benchmark tests?',
  default: false
}])
.then(ans => {
  if (!ans.all) {
    select(list => bench(list))
  } else {
    bench([
      'bare',
      'connect',
      'connect-router',
      'express-route-prefix',
      'express-with-middlewares',
      'express',
      'hapi',
      'koa-router',
      'koa',
      'restify',
      'take-five',
      'fastify'
    ])
  }
})

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
          name: 'express'
        },
        {
          name: 'koa'
        },
        {
          name: 'hapi'
        },
        {
          name: 'connect'
        },
        {
          name: 'restify'
        },
        {
          name: 'take-five'
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
          name: 'koa-router'
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
