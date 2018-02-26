#!/usr/bin/env node
'use strict'

const { existsSync } = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const chalk = require('chalk')
const { compare } = require('./lib/autocannon')

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
  'total.js',
  'fastify',
  'fastify-big-json',
  'micro',
  'micro-router',
  'spirit',
  'spirit-router',
  'trek-engine',
  'trek-engine-router'
]

const resultsDirectory = path.join(process.cwd(), 'results')
choices = choices.filter(choice => existsSync(path.join(resultsDirectory, `${choice}.json`)))

if (choices.length === 0) {
  console.log(chalk.red('Run benchmark first to gather results to compare'))
} else {
  inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your first pick?',
    choices
  }]).then((firstChoice) => {
    choices = choices.filter(choice => choice !== firstChoice.choice)
    inquirer.prompt([{
      type: 'list',
      name: 'choice',
      message: 'What\'s your second one?',
      choices
    }]).then((secondChoice) => {
      const [a, b] = [firstChoice.choice, secondChoice.choice]
      const result = compare(a, b)
      if (result === true) {
        console.log(chalk.green.bold(`${a} and ${b} both are fast!`))
      } else {
        const fastest = chalk.bold.yellow(result.fastest)
        const fastestAverage = chalk.green(result.fastestAverage)
        const slowest = chalk.bold.yellow(result.slowest)
        const slowestAverage = chalk.green(result.slowestAverage)
        const diff = chalk.bold.green(result.diff)

        console.log(`
 ${chalk.blue('Both are awesome but')} ${fastest} ${chalk.blue('is')} ${diff} ${chalk.blue('faster than')} ${slowest}
 • ${fastest} ${chalk.blue('request average is')} ${fastestAverage}
 • ${slowest} ${chalk.blue('request average is')} ${slowestAverage}`)
      }
    })
  })
}
