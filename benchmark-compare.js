#!/usr/bin/env node

import { platform, arch, cpus, totalmem } from 'node:os'
import { program } from 'commander'
import inquirer from 'inquirer'
import Table from 'cli-table'
import chalk from 'chalk'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { info } from './lib/packages.js'
import { compare } from './lib/autocannon.js'
import { headings, names, scenario as getScenario } from './lib/scenarios.js'

program.option('-t, --table', 'print table')
  .option('-m --markdown', 'format table for markdown')
  .option('-u --update', 'update README.md')
  .option('-s --scenario <name>', `scenario to compare (${names.join(', ')})`, 'get')
  .parse(process.argv)

const opts = program.opts()
const scenario = getScenario(opts.scenario)
const resultsPath = scenario.resultsDirectory

if (opts.markdown || opts.update) {
  chalk.level = 0
}

if (!getAvailableResults().length) {
  console.log(chalk.red('Benchmark to gather some results to compare.'))
} else if (opts.update) {
  updateReadme()
} else if (opts.table) {
  console.log(compareResults(opts.markdown))
} else {
  compareResultsInteractive()
}

function getAvailableResults () {
  return readdirSync(resultsPath)
    .filter((file) => file.match(/(.+)\.json$/))
    .sort()
    .map((choice) => choice.replace('.json', ''))
}

function formatHasRouter (hasRouter) {
  return typeof hasRouter === 'string' ? hasRouter : (hasRouter ? '✓' : '✗')
}

function updateReadme () {
  const machineInfo = `${platform()} ${arch()} | ${cpus().length} vCPUs | ${(totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`
  const benchmarkMd = `${scenario.heading}

* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`${scenario.method}\` (two rounds; one to warm-up, one to measure)

${compareResults(true)}
`
  const md = readFileSync('README.md', 'utf8')
  const start = md.indexOf(scenario.heading)
  if (start === -1) {
    writeFileSync('README.md', `${md.trimEnd()}\n\n${benchmarkMd}`, 'utf8')
    return
  }
  // Replace only this scenario's section, up to the next scenario heading
  const end = Math.min(...headings()
    .map(heading => md.indexOf(heading, start + scenario.heading.length))
    .filter(index => index !== -1), md.length)
  const rest = end < md.length ? `\n${md.slice(end)}` : ''
  writeFileSync('README.md', md.slice(0, start) + benchmarkMd + rest, 'utf8')
}

function compareResults (markdown) {
  const tableStyle = !markdown
    ? {}
    : {
        chars: {
          top: '',
          'top-left': '',
          'top-mid': '',
          'top-right': '',
          bottom: '',
          'bottom-left': '',
          'bottom-mid': '',
          'bottom-right': '',
          mid: '',
          'left-mid': '',
          'mid-mid': '',
          'right-mid': '',
          left: '|',
          right: '|',
          middle: '|'
        },
        style: {
          border: [],
          head: []
        }
      }

  const table = new Table({
    ...tableStyle,
    head: ['', 'Version', 'Router', 'Requests/s', 'Latency (ms)', 'Throughput/Mb']
  })

  if (markdown) {
    table.push([':--', '--:', '--:', ':-:', '--:', '--:'])
  }

  const results = getAvailableResults().map(file => {
    const content = readFileSync(`${resultsPath}/${file}.json`)
    return JSON.parse(content.toString())
  }).sort((a, b) => parseFloat(b.requests.mean) - parseFloat(a.requests.mean))

  const outputResults = []
  const formatThroughput = throughput => throughput ? (throughput / 1024 / 1024).toFixed(2) : 'N/A'

  for (const result of results) {
    const beBold = result.server === 'fastify'
    const { hasRouter, version } = info(result.server) || {}
    const {
      requests: { average: requests },
      latency: { average: latency },
      throughput: { average: throughput }
    } = result

    outputResults.push(
      {
        name: result.server,
        version,
        hasRouter,
        requests: requests ? requests.toFixed(1) : 'N/A',
        latency: latency ? latency.toFixed(2) : 'N/A',
        throughput: formatThroughput(throughput)
      }
    )

    table.push([
      bold(beBold, chalk.blue(result.server)),
      bold(beBold, version),
      bold(beBold, formatHasRouter(hasRouter)),
      bold(beBold, requests ? requests.toFixed(1) : 'N/A'),
      bold(beBold, latency ? latency.toFixed(2) : 'N/A'),
      bold(beBold, throughput ? (throughput / 1024 / 1024).toFixed(2) : 'N/A')
    ])
  }
  writeFileSync(scenario.resultsFile, JSON.stringify(outputResults), 'utf8')
  return table.toString()
}

async function compareResultsInteractive () {
  let choices = getAvailableResults()

  const firstChoice = await inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your first pick?',
    choices
  }])

  choices = choices.filter(choice => choice !== firstChoice.choice)

  const secondChoice = await inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your second one?',
    choices
  }])

  const [a, b] = [firstChoice.choice, secondChoice.choice]
  const result = compare(a, b, resultsPath)

  const fastest = chalk.bold.yellow(result.fastest)
  const fastestAverage = chalk.green(result.fastestAverage)
  const slowest = chalk.bold.yellow(result.slowest)
  const slowestAverage = chalk.green(result.slowestAverage)
  const diff = chalk.bold.green(result.diff)

  if (result === true) {
    console.log(chalk.green.bold(`${a} and ${b} both are fast!`))
    return
  }

  console.log(`
 ${chalk.blue('Both are awesome but')} ${fastest} ${chalk.blue('is')} ${diff} ${chalk.blue('faster than')} ${slowest}
 • ${fastest} ${chalk.blue('request average is')} ${fastestAverage}
 • ${slowest} ${chalk.blue('request average is')} ${slowestAverage}`)
}

function bold (writeBold, str) {
  return writeBold ? chalk.bold(str) : str
}
