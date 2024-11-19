#!/usr/bin/env node

import { program } from 'commander'

program.command('bench', 'Benchmark one, multiple or all modules.', { isDefault: true })
  .command('compare', 'Compare results by module.')
  .parse(process.argv)
