#!/usr/bin/env node

const program = require('commander');

program
  .command('bench', 'bench one or all packages', { isDefault: true })
  .command('compare', 'compare twice package')
  .parse(process.argv);
