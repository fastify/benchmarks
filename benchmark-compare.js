#!/usr/bin/env node
const { existsSync } = require('fs')
const globalModules = require('global-modules')
const inquirer = require('inquirer')
const { compare } = require('./lib/autocannon')
const chalk = require('chalk')

let choices = [
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
]

choices = choices.filter(choice => existsSync(`${globalModules}/fastify-benchmarks/results/${choice}.json`))

if (choices.length === 0) {
  console.log(chalk.red(`Run benchmark first to gather results to compare`))
} else {
  inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your first pick?',
    choices: choices
  }]).then(function (firstChoice) {
    choices = choices.filter(choice => choice !== firstChoice.choice)
    inquirer.prompt([{
      type: 'list',
      name: 'choice',
      message: 'What\'s your second one?',
      choices: choices
    }]).then(function (secondChoice) {
      let [a, b] = [firstChoice.choice, secondChoice.choice]
      let result = compare(a, b)
      if (result.equal) {
        console.log(chalk.green.bold(`${a} and ${b} both are fast!`))
      } else if (result.aWins) {
        console.log(chalk.blue(`Both are awesome but`), chalk.green.bold(a), chalk.underline.blue(`is faster than`), chalk.bold.yellow(b))
      } else {
        console.log(chalk.blue(`Both are awesome but`), chalk.bold.green(b), chalk.underline.blue(`is faster than`), chalk.bold.yellow(a))
      }
    })
  })
}
