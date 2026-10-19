import inquirer from 'inquirer'
import bench from './lib/bench.js'
import { choices, list } from './lib/packages.js'
import { names, servers } from './lib/scenarios.js'
const argv = process.argv.slice(2)

run().catch(err => {
  console.error(err)
  process.exit(1)
})

async function run () {
  const options = await getBenchmarkOptions()
  const available = servers(options.scenario)
  const modules = options.all ? choices.filter(c => available.has(c)) : await select(available)
  return bench(options, modules)
}

async function getBenchmarkOptions () {
  if (argv.length) return parseArgv()
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'all',
      message: 'Do you want to run all benchmark tests?',
      default: false
    },
    {
      type: 'list',
      name: 'scenario',
      message: 'Which scenario do you want to run?',
      choices: names,
      default: 'get'
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
      default: 40,
      validate (value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    }
  ])
}

function parseArgv () {
  const [all, connections, pipelining, duration, scenario = 'get'] = argv
  return {
    all: all === 'y',
    connections: +connections,
    pipelining: +pipelining,
    duration: +duration,
    scenario
  }
}

async function select (available) {
  const result = await inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new inquirer.Separator(' = The usual ='),
        ...list().filter(c => available.has(c.name)),
        new inquirer.Separator(' = The extras = '),
        ...list(true).filter(c => available.has(c.name))
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one package.'
        }
        return true
      }
    }
  ])
  return result.list
}
