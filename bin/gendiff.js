#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/gendiff.js'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version(version, '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'json')
  .action((filepath1, filepath2) => { genDiff(filepath1, filepath2) })

program.parse()
