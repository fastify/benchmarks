#!/usr/bin/env node
'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const Table = require('cli-table');
const { join } = require('path')
const { readdirSync, readFileSync } = require('fs')
const { compare } = require('./lib/autocannon')

const resultsPath = join(process.cwd(), 'results')
let choices = readdirSync(resultsPath)
  .filter((file) => file.match(/(.+)\.json$/))
  .sort()
  .map((choice) => choice.replace('.json', ''))

const showAsTable = process.argv[2] === '-t'
if (!choices.length) {
  console.log(chalk.red('Benchmark to gather some results to compare.'))
} else if (showAsTable) {
  const table = new Table({
    head: ['', 'Requests/s', 'Latency', 'Throughput/Mb']
  })

  choices.forEach((result) => {
    let data = readFileSync(`${resultsPath}/${result}.json`)
    data = JSON.parse(data.toString())
    table.push([
      chalk.blue(result),
      data.requests.average,
      data.latency.average,
      (data.throughput.average / 1024 / 1024).toFixed(2)
    ])
  })

  console.log(table.toString())
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
