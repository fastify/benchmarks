#!/usr/bin/env node
'use strict'

import { platform, arch, cpus, totalmem } from 'os'
import { option, opts as _opts } from 'commander'
import { prompt } from 'inquirer'
import Table from 'cli-table'
import { level, red, blue, bold as _bold, green } from 'chalk'
import { join } from 'path'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { info } from './lib/packages'
import { compare } from './lib/autocannon'

const resultsPath = join(process.cwd(), 'results')

option('-t, --table', 'print table')
  .option('-m --markdown', 'format table for markdown')
  .option('-u --update', 'update README.md')
  .parse(process.argv)

const opts = _opts()

if (opts.markdown || opts.update) {
  // eslint-disable-next-line no-unused-vars, no-import-assign
  level = 0
}

if (!getAvailableResults().length) {
  console.log(red('Benchmark to gather some results to compare.'))
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
  const benchmarkMd = `# Benchmarks

* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`autocannon -c 100 -d 40 -p 10 localhost:3000\` (two rounds; one to warm-up, one to measure)

${compareResults(true)}
`
  const md = readFileSync('README.md', 'utf8')
  writeFileSync('README.md', md.split('# Benchmarks')[0] + benchmarkMd, 'utf8')
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
      bold(beBold, blue(result.server)),
      bold(beBold, version),
      bold(beBold, formatHasRouter(hasRouter)),
      bold(beBold, requests ? requests.toFixed(1) : 'N/A'),
      bold(beBold, latency ? latency.toFixed(2) : 'N/A'),
      bold(beBold, throughput ? (throughput / 1024 / 1024).toFixed(2) : 'N/A')
    ])
  }
  writeFileSync('benchmark-results.json', JSON.stringify(outputResults), 'utf8')
  return table.toString()
}

async function compareResultsInteractive () {
  let choices = getAvailableResults()

  const firstChoice = await prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your first pick?',
    choices
  }])

  choices = choices.filter(choice => choice !== firstChoice.choice)

  const secondChoice = await prompt([{
    type: 'list',
    name: 'choice',
    message: 'What\'s your second one?',
    choices
  }])

  const [a, b] = [firstChoice.choice, secondChoice.choice]
  const result = compare(a, b)

  const fastest = _bold.yellow(result.fastest)
  const fastestAverage = green(result.fastestAverage)
  const slowest = _bold.yellow(result.slowest)
  const slowestAverage = green(result.slowestAverage)
  const diff = _bold.green(result.diff)

  if (result === true) {
    console.log(green.bold(`${a} and ${b} both are fast!`))
    return
  }

  console.log(`
 ${blue('Both are awesome but')} ${fastest} ${blue('is')} ${diff} ${blue('faster than')} ${slowest}
 • ${fastest} ${blue('request average is')} ${fastestAverage}
 • ${slowest} ${blue('request average is')} ${slowestAverage}`)
}

function bold (writeBold, str) {
  return writeBold ? _bold(str) : str
}
